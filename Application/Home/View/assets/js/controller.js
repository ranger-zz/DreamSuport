/**
 * controller for business and menu changed
 */

  // menu change
  // ======================
$prevMenu = "cuserList"
function menuClick($menuName){
	if ($prevMenu != $menuName) {
		$("#".concat($prevMenu)).removeClass("active-menu")
		$("#".concat($menuName)).addClass("active-menu")
		$prevMenu = $menuName
		if ($menuName == "projectList") {
			$("#page-wrapper").load("./partials/project-list.html")
		};		
		if ($menuName == "projectTemplate") {
			$("#page-wrapper").load("./partials/project-template.html")
		};		
		if ($menuName == "dealDetail") {
			$("#page-wrapper").load("./partials/deal-detail.html")
		};		
		if ($menuName == "tuitionWithdraw") {
			$("#page-wrapper").load("./partials/tuition-withdraw.html")
		};		
		if ($menuName == "fundWithdraw") {
			$("#page-wrapper").load("./partials/fund-withdraw.html")
		};		
		if ($menuName == "cuserList") {
			$("#page-wrapper").load("./partials/cuser-list.html")
		};		
	};
}
