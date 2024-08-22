## プロジェクト構成
- .devcontainer
  - VSCode Remote Containerの設定
- .vscode
  - VSCodeの設定
- app
  - (pages)
    - 各ページのコンポーネント
  - api
    - Route Handlerの関数（ドラフトモード切り替え、Revalidate）
  - components
    - conform
      - フォームのコンポーネント
    - ui
      - shadcn/uiコンポーネント
    - その他のコンポーネント
- lib
  - CMSの呼び出し、フォームの処理、型定義など
- packages/email
  - メールデザイン（React Email）
- public
  - 静的ファイル（画像）
- `next.config.js`
  - リダイレクト設定

## 開発

### GitHub Codespacesを使った修正方法
#### 立ち上げ
ブランチをmainではなくdevに切り替えて、「< > Code」の緑ボタンをクリックして、
Codespacesタブを選択して、「Create codespace on dev」をクリックしてください。

#### 環境変数の設定
`.env.example`をコピーして`.env.local`を作成し、環境変数を設定してください。
※Contentfulのコンテンツが記載されていないページを更新するならスキップ可（トップページ）

#### ローカルサーバーの立ち上げ
以下のコマンドを実行してください。
```bash
npm run dev
```
ローカルサーバーが立ち上がります。
自動で立ち上がらない場合は、 http://localhost:3000 にアクセスしてください。

#### 修正
VSCode上でファイルを修正してください。
ローカルサーバーが立ち上がっているので、修正内容がリアルタイムに反映されます。
正しく動作するか確認してください。

#### コミット
以下のコマンドを実行してください。
```bash
git add <修正したファイル>
git commit -m "コミットメッセージ"
git push
```
STG環境に自動デプロイされます。
1分程度で反映されるので、その後に確認してください。

#### プルリクエスト
GitHubのリポジトリでdev->mainに向けてプルリクエストを作成してください。
管理者が確認してマージします。

### メールデザインの開発環境

```bash
cd packages/email
npm run dev
```

ローカルサーバーが立ち上がります。
自動で立ち上がらない場合は、 http://localhost:3001 にアクセスしてください。