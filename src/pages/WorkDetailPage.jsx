import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ProjectSubLayout from '../layouts/ProjectSubLayout';
import { works } from '../constants/work.jsx';

const LOADING_DURATION = 500;

function buildLinkInfo(work) {
  const list = [];

  if (work.period) {
    list.push({ label: '제작 기간', value: work.period });
  }
  if (work.contribution) {
    list.push({ label: '기여도', value: work.contribution });
  }
  if (work.techStack) {
    list.push({ label: '사용 기술', value: work.techStack });
  }
  if (work.role) {
    list.push({ label: '주요 역할', value: work.role });
  }
  if (work.responsibilities?.length) {
    list.push({ label: '담당 업무', value: work.responsibilities });
  }
  if (work.achievements?.length) {
    list.push({ label: '주요 성과', value: work.achievements });
  }
  if (work.githubUrl) {
    list.push({ label: '깃허브', href: work.githubUrl, value: '깃허브 URL' });
  }
  if (work.deployUrl) {
    list.push({ label: 'URL', href: work.deployUrl, value: '배포 URL' });
  }
  if (work.notionUrl) {
    list.push({ label: 'Notion', href: work.notionUrl, value: 'Notion에서 보기' });
  }

  return list;
}

function buildRecords(work) {
  if (!work.relatedLinks?.length) return [];
  return work.relatedLinks.map((link) => ({
    text: link.text,
    href: link.url || link.href || '#',
  }));
}

function WorkDetailPage() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const work = works.find((w) => w.slug === slug);

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

  if (!work) {
    return (
      <div className="wrap">
        <Header />
        <main className="project-sub__main">
          <div className="project-sub__inner">
            <p>작업을 찾을 수 없습니다.</p>
          </div>
        </main>
      </div>
    );
  }

  const description = work.detailDescription ?? work.shortDescription;
  const linkInfo = buildLinkInfo(work);

  return (
    <div className="wrap">
      <Header />
      <ProjectSubLayout
        title={work.title}
        description={description}
        backTo="/work"
        backLabel="작업 목록으로"
        linkInfo={linkInfo}
      />
    </div>
  );
}

export default WorkDetailPage;
