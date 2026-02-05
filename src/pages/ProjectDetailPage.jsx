import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProjectSubLayout from '../layouts/ProjectSubLayout';
import { projects } from '../constants/projects.jsx';

const detailContents = {};
const LOADING_DURATION = 500;

/**
 * YouTube URL을 임베드 URL로 변환
 */
function convertYouTubeToEmbed(url) {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
}

function buildLinkInfo(project) {
  const list = [];

  if (project.type) {
    list.push({ label: '프로젝트 구분', value: project.type === 'PERSONAL' ? '개인 프로젝트' : '팀 프로젝트' });
  }
  if (project.period) {
    list.push({ label: '기간', value: project.period });
  }
  if (project.teamSize != null && project.teamSize !== '') {
    list.push({ label: '팀원', value: `${project.teamSize}명` });
  }
  
  // techStack이 객체인 경우 처리
  if (project.techStack) {
    if (typeof project.techStack === 'object') {
      if (project.techStack.frontend) {
        list.push({ label: 'Frontend', value: project.techStack.frontend });
      }
      if (project.techStack.backend) {
        list.push({ label: 'Backend', value: project.techStack.backend });
      }
      if (project.techStack.tools) {
        list.push({ label: 'Tools', value: project.techStack.tools });
      }
    } else {
      list.push({ label: '주요 기술', value: project.techStack });
    }
  }
  
  if (project.responsibilities?.length) {
    list.push({ label: '담당 업무', value: project.responsibilities });
  }
  
  // GitHub URL 처리 (수정된 부분)
  if (project.githubUrlBackend) {
    // githubUrlBackend가 있을 때는 githubUrl을 Frontend로 처리
    if (Array.isArray(project.githubUrl)) {
      // githubUrl이 배열인 경우 각각을 Frontend로 처리
      project.githubUrl.forEach((url, index) => {
        const labels = ['Frontend - Web (GitHub)', 'Frontend - App (GitHub)'];
        list.push({ label: labels[index] || `Frontend ${index + 1} (GitHub)`, href: url });
      });
    } else if (project.githubUrl) {
      // 단일 URL인 경우
      list.push({ label: 'Frontend (GitHub)', href: project.githubUrl });
    }
    list.push({ label: 'Backend (GitHub)', href: project.githubUrlBackend });
  } else if (project.githubUrl) {
    // githubUrl이 배열인 경우
    if (Array.isArray(project.githubUrl)) {
      project.githubUrl.forEach((url, index) => {
        const labels = ['Frontend - Web (GitHub)', 'Frontend - App (GitHub)'];
        list.push({ label: labels[index] || `GitHub ${index + 1}`, href: url });
      });
    } else {
      // 단일 URL인 경우
      list.push({ label: '깃허브', href: project.githubUrl });
    }
  }
  
  if (project.deployUrl) {
    list.push({ label: 'URL', href: project.deployUrl, value: '배포 URL' });
  }
  if (project.notionUrl) {
    list.push({ label: '노션 URL', href: project.notionUrl, value: 'Notion에서 보기' });
  }

  return list;
}

function buildRecords(project) {
  if (!project.records || !Array.isArray(project.records)) return [];
  return project.records.map((r) =>
    typeof r === 'string' ? { text: r, href: '#' } : { text: r.text, href: r.href }
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const project = projects.find((p) => p.slug === slug);
  const content = slug ? detailContents[slug] : null;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="wrap">
        <Header />
        <div className="project-detail-loading">
          <div className="project-detail-loading__spinner" aria-hidden />
          <p className="project-detail-loading__text">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="wrap">
        <Header />
        <main className="project-sub__main">
          <div className="project-sub__inner">
            <p>프로젝트를 찾을 수 없습니다.</p>
          </div>
        </main>
      </div>
    );
  }

  const description = project.description ?? project.detailDescription ?? content?.description ?? project.shortDescription;
  const linkInfo = buildLinkInfo(project);
  // videos: url이 있으면 YouTube 임베드 URL로 변환
  const videos = (project.videos || []).map(video => ({
    ...video,
    embedUrl: video.embedUrl || (video.url && convertYouTubeToEmbed(video.url)) || undefined
  }));

  // features를 coreFlows 형식으로 변환
  const coreFlows = (project.features || project.coreFlows || []).map(f => ({
    title: f.title,
    steps: f.description ? [f.description] : f.steps || []
  }));

  // challenges를 keyLogic 형식으로 변환
  const keyLogic = (project.challenges || project.keyLogic || []).map(c => ({
    title: c.issue || c.title,
    content: c.solution || c.content
  }));

  return (
    <div className="wrap">
      <Header />
      <ProjectSubLayout
        title={project.title}
        description={description}
        linkInfo={linkInfo}
        coreFlows={coreFlows}
        keyLogic={keyLogic}
        pdfs={project.pdfs || []}
        videos={videos}
      />
    </div>
  );
}

export default ProjectDetailPage;
