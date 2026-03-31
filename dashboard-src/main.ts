// const msg="hello welcome to ts";
// // const tetx=document.querySelector("#title");
// // if(tetx)
// //    tetx.textContent=msg;
// // enum browser{
// //     n1,n2,n3
// // }
// // console.log(browser);
// const user = { profile: { name: "Alice" } };
// console.log(user.profile.name); // "Alice"
// console.log(user?.address?.city); 
import express from 'express';
const app = express();
const port=process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
