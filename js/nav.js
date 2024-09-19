document.write('<div class="sidebar">');
document.write('<div class="logo-details"> <i class="masterball"><img src="https://pokemmostats.com/ico/masterball.png" width="24" height="24"></img></i>');
document.write('<div class="logo_name">MMO Stats</div> <i class="bx bx-menu" id="btn" ></i></div>');
document.write('<ul class="nav-list">');
document.write('<li> <i class=" bx bx-search" ></i> <input type="text" placeholder="Search..."> <span class="tooltip">Search</span></li>');
document.write('<li><a href="https://pokemmostats.com/"><i class="bx bx-home" ></i><span class="links_name">Home</span></a><span class="tooltip">Home</span></li>');
document.write('<li><a href="https://pokemmostats.com/Teams/"><i class="bx bx-list-ol"></i><span class="links_name">Meta Teams</span></a><span class="tooltip">Teams</span></li>');
document.write('<li><a href="https://pokemmostats.com/Tierlist/"><i class="bar-chart-alt-2" ></i>		 <span class="links_name">Tier list</span>	   </a>	   <span class="tooltip">Tier list</span>	 </li>');
//document.write('<li><a href="#">		 <i class="bx bx-pie-chart-alt-2" ></i>		 <span class="links_name">Analytics</span>	   </a>	   <span class="tooltip">Analytics</span>	 </li>');
//document.write('<li> <a href="#">		 <i class="bx bx-folder" ></i>		 <span class="links_name">File Manager</span>	   </a>	   <span class="tooltip">Files</span>	 </li>')
//document.write('<li> <a href="#">		 <i class="bx bx-cart-alt" ></i>		 <span class="links_name">Order</span>	   </a>	   <span class="tooltip">Order</span>	 </li>')
document.write('<li> <a href="https://www.paypal.com/donate/?hosted_button_id=HNNUVXH3VTBPY" target="_blank">		 <i class="bx bx-heart" ></i> <span class="links_name">Support</span>	   </a>	   <span class="tooltip">Support</span> </li>')
//document.write('<li> <a href="#">		 <i class="bx bx-cog" ></i>		 <span class="links_name">Setting</span>	   </a>	   <span class="tooltip">Setting</span>	 </li>')
document.write('<li class="profile">  <div class="profile-details">	<img src="https://pokemmostats.com/ico/profile.png" alt="profileImg">	<div class="name_job">	<div class="name">Guest</div>	<div class="job"></div></div></div> <i class="bx bx-log-out" id="log_out" ></i>	 </li>')
document.write('</ul>  </div>')

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});
searchBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
	    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }else {
	    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }
}

document.write('<style>');
document.write('@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");');
document.write('*{	margin: 0;	padding: 0;	box-sizing: border-box;	font-family: "Poppins" , sans-serif;	}');
document.write('.sidebar{	position: fixed;	left: 0;	top: 0;	height: 100%;	width: 78px;	background: #11101D;	padding: 6px 14px;	z-index: 99;	transition: all 0.5s ease;	}');
document.write('.sidebar.open{	width: 250px;	}');
document.write('.sidebar .logo-details{	height: 60px;	display: flex;	align-items: center;	position: relative;	}');
document.write('.sidebar .logo-details .masterball{	opacity: 0;	transition: all 0.5s ease;	}');
document.write('.sidebar .logo-details .logo_name{	color: #fff;	font-size: 20px;	font-weight: 600;	opacity: 0;	transition: all 0.5s ease;	}');
document.write('.sidebar.open .logo-details .masterball,	.sidebar.open .logo-details .logo_name{	opacity: 1;	}');
document.write('.sidebar .logo-details #btn{	position: absolute;	top: 50%;	right: 0;	transform: translateY(-50%);	font-size: 22px;	transition: all 0.4s ease;	font-size: 23px;	text-align: center;	cursor: pointer;	transition: all 0.5s ease;	}');
document.write('.sidebar.open .logo-details #btn{	text-align: right;	}');
document.write('.sidebar i{	color: #fff;	height: 60px;	min-width: 50px;	font-size: 28px;	text-align: center;	line-height: 60px;	}');
document.write('.sidebar .nav-list{	margin-top: 20px;	height: 100%;	}');
document.write('.sidebar li{	position: relative;	margin: 8px 0;	list-style: none;	}');
document.write('.sidebar li .tooltip{	position: absolute;	top: -20px;	left: calc(100% + 15px);	z-index: 3;	background: #fff;	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);	padding: 6px 12px;	border-radius: 4px;	font-size: 15px;	font-weight: 400;	opacity: 0;	white-space: nowrap;	pointer-events: none;	transition: 0s;	}');
document.write('.sidebar li:hover .tooltip{	opacity: 1;	pointer-events: auto;	transition: all 0.4s ease;	top: 50%;	transform: translateY(-50%);	}');
document.write('.sidebar.open li .tooltip{	display: none;	}');
document.write('.sidebar input{	font-size: 15px;	color: #FFF;	font-weight: 400;	outline: none;	height: 50px;	width: 100%;	width: 50px;	border: none;	border-radius: 12px;	transition: all 0.5s ease;	background: #1d1b31;	}');
document.write('.sidebar.open input{	padding: 0 20px 0 50px;	width: 100%;	}');
document.write('.sidebar .bx-search{	position: absolute;	top: 50%;	left: 0;	transform: translateY(-50%);	font-size: 22px;	background: #1d1b31;	color: #FFF;	}');
document.write('.sidebar.open .bx-search:hover{	background: #1d1b31;	color: #FFF;	}');
document.write('.sidebar .bx-search:hover{	background: #FFF;	color: #11101d;	}');
document.write('.sidebar li a{	display: flex;	height: 100%;	width: 100%;	border-radius: 12px;	align-items: center;	text-decoration: none;	transition: all 0.4s ease;	background: #11101D;	}');
document.write('.sidebar li a:hover{	background: #FFF;	}');
document.write('.sidebar li a .links_name{	color: #fff;	font-size: 15px;	font-weight: 400;	white-space: nowrap;	opacity: 0;	pointer-events: none;	transition: 0.4s;	}');
document.write('.sidebar.open li a .links_name{	opacity: 1;	pointer-events: auto;	}');
document.write('.sidebar li a:hover .links_name,	.sidebar li a:hover i{	transition: all 0.5s ease;	color: #11101D;	}');
document.write('.sidebar li i{	height: 50px;	line-height: 50px;	font-size: 18px;	border-radius: 12px;	}');
document.write('.sidebar li.profile{	position: fixed;	height: 60px;	width: 78px;	left: 0;	bottom: -8px;	padding: 10px 14px;	background: #1d1b31;	transition: all 0.5s ease;	overflow: hidden;	}');
document.write('.sidebar.open li.profile{	width: 250px;	}');
document.write('.sidebar li .profile-details{	display: flex;	align-items: center;	flex-wrap: nowrap;	}');
document.write('.sidebar li img{	height: 45px;	width: 45px;	object-fit: cover;	border-radius: 6px;	margin-right: 10px;	}');
document.write('.sidebar li.profile .name,	.sidebar li.profile .job{	font-size: 15px;	font-weight: 400;	color: #fff;	white-space: nowrap;	}');
document.write('.sidebar li.profile .job{	font-size: 12px;	}');
document.write('.sidebar .profile #log_out{	position: absolute;	top: 50%;	right: 0;	transform: translateY(-50%);	background: #1d1b31;	width: 100%;	height: 60px;	line-height: 60px;	border-radius: 0px;	transition: all 0.5s ease;	}');
document.write('.sidebar.open .profile #log_out{	width: 50px;	background: none;	}');
document.write('.home-section{	position: relative;	background: #E4E9F7;	min-height: 100vh;	top: 0;	left: 78px;	width: calc(100% - 78px);	transition: all 0.5s ease;	z-index: 2;	}');
document.write('.sidebar.open ~ .home-section{	left: 250px;	width: calc(100% - 250px);	}');
document.write('.home-section .text{	display: inline-block;	color: #11101d;	font-size: 25px;	font-weight: 500;	margin: 18px	}');
document.write('@media (max-width: 420px) {	.sidebar li .tooltip{		display: none;	}');
document.write('}</style>');

