const TARGET_URL = "https://qblog.top/2024/03/11/qt-de-zhuo-you-jian-shang-ji/";
const REDIRECT_STATUS = 302; // 301=永久重定向, 302=临时重定向

export default function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  const target = new URL(TARGET_URL);
  // 保留原请求 query 参数（如果有），便于追踪/统计
//   for (const [k, v] of url.searchParams) {
//     target.searchParams.append(k, v);
//   }

  return new Response(null, {
    status: REDIRECT_STATUS,
    headers: {
      Location: target.toString(),
      // 避免边缘侧/浏览器错误缓存跳转结果；如你想加速可调整
      "Cache-Control": "no-store",
    },
  });
}
