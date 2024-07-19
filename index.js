

document.getElementById("menu-btn").addEventListener("click", ()=> console.log("clicked"))

const getMenuBarHtml = ()=> {
  return   `
    <ul class="sm:hidden sm:flex flex-col gap-4 self-center text-sm lg:text-base">
        <li class="drop-shadow-xl border-b-2 border-black font-bold"><a href="#">Home</a></li>
        <li class=""><a href="">About</a></li>
        <li class=""><a href="/doctors-list.html">Find Doctor</a></li>
        <li class=""><a href="/blog.html">Blog</a></li>
        <li class=""><a href="">Contact</a></li>
    </ul>
  
  `
}
console.log(getMenuBarHtml())