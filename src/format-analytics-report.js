const rows = $('Get a report').all().map(i => i.json);

const totalUsers = rows.reduce(
  (sum, r) => sum + Number(r.totalUsers || 0),
  0
);

const totalSessions = rows.reduce(
  (sum, r) => sum + Number(r.sessions || 0),
  0
);

const totalViews = rows.reduce(
  (sum, r) => sum + Number(r.screenPageViews || 0),
  0
);

const ai = $input.first().json.content.parts[0].text;

return [
  {
    json: {
      report: `サイト週間アクセスレポート

対象期間: 過去7日間

総ユーザー数: ${totalUsers}
総セッション数: ${totalSessions}
総ページビュー数: ${totalViews}

【AI分析】

${ai}

【詳細レポート】
https://datastudio.google.com/reporting/b254fb83-952e-4b5a-b40a-d253099a0ecb/page/kIV1C/edit`
    }
  }
];