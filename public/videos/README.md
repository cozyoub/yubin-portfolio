# 시연 영상 폴더

이 폴더에 프로젝트 시연 영상 파일을 저장하세요.

## 사용 방법

1. 비디오 파일을 이 폴더에 복사 (예: `moneylog-login.mp4`)
2. `src/constants/projects.jsx`에서 해당 프로젝트의 `videos` 배열에 추가:
   ```javascript
   videos: [
     { title: '로그인 기능', videoUrl: '/videos/moneylog-login.mp4' },
   ]
   ```

## 파일 형식

- 권장: `.mp4` (H.264 코덱)
- 지원: `.webm`, `.ogg` 등 HTML5 video 태그가 지원하는 형식

## 파일 크기 제한

- GitHub: 파일당 100MB 제한
- 100MB 이상인 경우 Git LFS 사용 권장
- 또는 비디오를 압축하거나 짧게 편집

## Git LFS 사용법 (100MB 이상 파일)

```bash
# Git LFS 설치 후
git lfs install
git lfs track "public/videos/*.mp4"
git add .gitattributes
git add public/videos/*.mp4
git commit -m "Add video files with LFS"
```
