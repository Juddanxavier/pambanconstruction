import{u as p,r as f,a,j as e,H as g,L as h}from"./app.f8181d74.js";import{G as w,P as N}from"./PrimaryButton.3685b78d.js";import{T as o,I as l}from"./TextInput.d5b9bb65.js";import{I as n}from"./InputLabel.d225bdba.js";import"./ApplicationLogo.18b1d6c5.js";function k(){const{data:r,setData:i,post:u,processing:d,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const m=s=>{i(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(w,{children:[e(g,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),u(route("register"))},children:[a("div",{children:[e(n,{forInput:"name",value:"Name"}),e(o,{type:"text",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:m,required:!0}),e(l,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"email",value:"Email"}),e(o,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:m,required:!0}),e(l,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"password",value:"Password"}),e(o,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:m,required:!0}),e(l,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"password_confirmation",value:"Confirm Password"}),e(o,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",handleChange:m,required:!0}),e(l,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Already registered?"}),e(N,{className:"ml-4",processing:d,children:"Register"})]})]})]})}export{k as default};
