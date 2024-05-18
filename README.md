# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


site effect 
หมายถึงการกระทำที่ส่งผลกระทบภายนอกต่อฟังก์ชันที่กำลังทำงาน ซึ่งไม่ได้เกี่ยวข้องกับการคำนวณและการคืนค่าผลลัพธ์โดยตรง เช่น การดึงข้อมูลจาก API, การตั้งค่า subscriptions, การแก้ไข DOM, การเขียน log, หรือการตั้งค่า timers

useEffect เป็น Hook ใน React ที่ใช้สำหรับจัดการ side effect ใน component ของ React ฟังก์ชัน 
useEffect จะถูกรันหลังจากที่ React ทำการ render component แล้ว ซึ่งทำให้เราสามารถทำการอัปเดต DOM, fetch ข้อมูลจาก API, ตั้งค่า subscription หรือทำการ clean up ต่างๆ ได้



  useEffect(() => {
    
  }, []);

  useEffect(() => {
    
  });

  useEffect(() => {
    
  }, [data]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // อัปเดตทุก 1 วินาที

    // ทำการ clean-up เมื่อคอมโพเนนต์ unmount
    return () => clearInterval(interval);
  }, []); // รันครั้งเดียวเมื่อคอมโพเนนต์ mount