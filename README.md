# FormForge AI 展示站

這是一個可直接上傳到 GitHub Pages 的靜態展示網站。

## 結構

- \`index.html\`：首頁
- \`styles.css\`：樣式
- \`script.js\`：互動按鈕
- \`assets/\`：圖片資產
- \`404.html\`：GitHub Pages 轉址備用頁
- \`.nojekyll\`：避免 GitHub Pages 用 Jekyll 處理靜態檔

## 本機查看

最簡單做法：

1. 直接打開 \`index.html\`
2. 或用本機伺服器：

\`\`\`bash
cd fitness-ai-site
python3 -m http.server 8000
\`\`\`

然後打開：

<http://localhost:8000>

## 上傳到 GitHub Pages

### 做法 1：用新的 repository

1. 到 GitHub 建立一個新的 repository
2. 把 \`fitness-ai-site\` 裡面的所有檔案上傳到 repository 根目錄
3. 到 GitHub repository 頁面
4. 點 \`Settings\`
5. 左側點 \`Pages\`
6. 在 \`Build and deployment\` 選：
   - \`Source\`: \`Deploy from a branch\`
   - \`Branch\`: \`main\`
   - \`Folder\`: \`/ (root)\`
7. 儲存後等 1 到 3 分鐘
8. GitHub 會產生一個網址，格式通常像：

\`\`\`text
https://你的帳號.github.io/你的repo名稱/
\`\`\`

### 做法 2：如果你想用帳號首頁網址

Repository 名稱改成：

\`\`\`text
你的帳號.github.io
\`\`\`

這樣網址會直接是：

\`\`\`text
https://你的帳號.github.io/
\`\`\`

## 分享建議

- 要交報告：用 GitHub Pages 網址最方便
- 要給老師或同學：網址 + PDF 簡報一起附
- 要當作品集：之後可以再加「團隊」、「技術架構」、「功能 demo」區塊

## 之後還能怎麼加強

- 加入更多 AI 生成情境圖
- 補簡報 PDF 下載按鈕
- 加入聯絡表單或作品集導流按鈕
- 做成多頁版本，例如 \`product.html\`、\`report.html\`
