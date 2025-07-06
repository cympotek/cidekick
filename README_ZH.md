<p align="center">
  <a href="README.md">English</a> | 中文
</p>

<p align="center">
  <a href="https://www.cympotek.com">
   <img src="./public/assets/logo.png?type=new" alt="Logo">
  </a>

  <h1 align="center">Cidekick：您的 AI 製造業助理</h1>

</p>


> 本專案為 [Glass](https://github.com/pickle-com/glass) 的一個分支，並在其基礎上進行了修改和增強。感謝 [Soham](https://x.com/soham_btw) 以及所有讓此專案成為可能的開源貢獻者！

🤖 **您的 AI 製造業助理。** Cidekick 能分析電路圖、從圖片、即時影像或會議中識別組件，並協助您簡化整體生產流程。

與我們一起享受開發的樂趣，歡迎隨時提交 Pull Request 或建立 Issue。

## 快速入門（本地建置）

### 先決條件

首先下載並安裝 [Node](https://nodejs.org/en/download)。
如果您使用 Windows，您還需要安裝 [Visual Studio 的建置工具](https://visualstudio.microsoft.com/downloads/)。

請確保您使用的是 Node.js 20.x.x 版本，以避免原生相依性套件的建置錯誤。

```bash
# 檢查您的 Node.js 版本
node --version

# 如果您需要安裝 Node.js 20.x.x，我們建議使用 nvm：
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# nvm install 20
# nvm use 20
```

### 安裝

```bash
npm run setup
```

## 功能亮點

### 零件識別
<img width="100%" alt="零件識別" src="./public/assets/image3.png">

## 多語言支援

目前支援英文、中文、日文。

<img width="100%" alt="多語言支援" src="./public/assets/image4.png">

### 提問：根據您先前所有的螢幕操作與音訊內容獲得解答

<img width="100%" alt="booking-screen" src="./public/assets/00.gif">

### 擷取畫面以獲得製造助理般的建議

<img width="100%" alt="booking-screen" src="./public/assets/01.gif">

### 使用您自己的 Gemini API / OpenAI API 金鑰

您可以從 [Google AI Studio](https://aistudio.google.com/) 申請。

或者，您也可以前往 [OpenAI API](https://platform.openai.com/api-keys) 取得您的 OpenAI API 金鑰。

## 鍵盤快捷鍵

`Ctrl/Cmd + \`：顯示和隱藏主視窗

`Ctrl/Cmd + Enter`：使用您先前所有的螢幕和音訊內容向 AI 提問

`Ctrl/Cmd + 方向鍵`：移動主視窗位置

## 貢獻

我們歡迎各種貢獻！若有錯誤回報或功能請求，請隨時提出問題。

## 關於 Cidekick

**我們的使命是為每個人打造一個活生生的數位助理。** Cidekick 是一個值得信賴的管道，能將您的日常數據轉化為可行的見解。請造訪 [www.cympotek.com](https://www.cympotek.com) 聯繫我們。 