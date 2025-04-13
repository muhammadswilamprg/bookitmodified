// app/error.tsx (أو pages/error.tsx إذا كنت تستخدم pages)
'use client';

import { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    // يمكن إضافة منطق لتسجيل الأخطاء أو القيام بإجراءات أخرى عند حدوث خطأ
    console.error('An error occurred!');
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>حدث خطأ ما!</h1>
      <p>نعتذر، واجهنا مشكلة أثناء تحميل المحتوى. يرجى المحاولة لاحقًا.</p>
    </div>
  );
};

export default ErrorPage;
