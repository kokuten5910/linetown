// 宣伝サイトの表示設定です。ここは自由に書き換えてください（data.js とは別のファイルです）。
window.SITE={
  title:"黒甜のスタンプ街",
  intro:"LINEスタンプ・絵文字・着せかえのクリエイター「黒甜」の作品ギャラリー",
  author:"黒甜",
  reading:"こくてん",
  // 自己紹介です。ご自身の言葉に書き換えられます（\n で改行できます）
  profile:"ここは、LINEクリエイター・黒甜（こくてん）のスタンプ街。\n作品ごとに住人がいて、新しい作品が増えると街がにぎやかになります。\n勇者になって、街を歩いてみてください。",
  // LINEストアの、クリエイターページです。トップと固定の帯に「🛒」のボタンで出ます
  stores:[
    {label:"LINEスタンプ",url:"https://store.line.me/stickershop/author/5486427/ja"},
    {label:"LINE絵文字",url:"https://store.line.me/emojishop/author/10591484/ja"},
    {label:"LINE着せかえ",url:"https://store.line.me/themeshop/author/10591483/ja"}
  ],
  // 人気の作品の欄を出すか（false にすると非表示）。順位は販売実績にもとづきますが、金額は公開しません
  showPopular:true,
  links:[
    {label:"Threads",url:""}                            // URLを入れると、トップにボタンが出ます。空のままなら表示されません
  ],
  // アクセス解析：使うものだけ入力してください。すべて空なら、何も記録・送信しません。
  analytics:{
    goatcounter:"",   // 例："kokuten"（goatcounter.com で作った自分のサイトのコード）
    ga4:"",           // 例："G-XXXXXXXXXX"（Google アナリティクス4の測定ID）
    clarity:"",       // 例："abcd1234ef"（Microsoft Clarity のプロジェクトID。タップの位置をヒートマップで見られます）
    endpoint:"https://script.google.com/macros/s/AKfycbxXzXy_xcOcNL5VhXj9ahFJqSs46iMUduLiYlC3wCNgYAFS_5h2GQHKM7cbfvPErEUY/exec"       //
  },
  footer:"© 黒甜"
};
