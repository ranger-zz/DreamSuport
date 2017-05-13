/**
 * controller for business and menu changed
 */

  // menu change
  // ======================
$prevMenu = "cuserList"
function menuClick(menuName,partials){
	if ($prevMenu != menuName) {
		$("#".concat($prevMenu)).removeClass("active-menu")
		$("#".concat(menuName)).addClass("active-menu")
		$prevMenu = menuName
	};
	//$("#page-wrapper").load("./partials/".concat(partials))
	
	if (menuName == "projectList") {
		//$("#page-wrapper").load("./partials/project-list.html")
		getProjectList("","1","10","./partials/project-list.html")
	};		
	if (menuName == "projectTemplate") {
		$("#page-wrapper").load("./partials/project-template.html")
	};		
	if (menuName == "dealDetail") {
		$("#page-wrapper").load("./partials/deal-detail.html")
	};		
	if (menuName == "tuitionWithdraw") {
		$("#page-wrapper").load("./partials/tuition-withdraw.html")
	};		
	if (menuName == "fundWithdraw") {
		$("#page-wrapper").load("./partials/fund-withdraw.html")
	};		
	if (menuName == "cuserList") {
		$("#page-wrapper").load("./partials/cuser-list.html")
	};
}

function getProjectList(search,pageNo,rowNo,partials){
	api = ""
	data = ""
	/*
	$.post(api,
		{
			"search":search,
			"pageNo":pageNo,
			"rowNo":rowNo
		}, function(response,status){
			if (status == "success"){
				data = response
			}
		},
		"json"
	);*/
	data = '{"projectList":[{"ID":"1","ProjectName":"1703 Plan","OpenTime":"2016-12-01","CloseTime":"2017-05-31","Status":"open"},{"ID":"2","ProjectName":"1709 Plan","OpenTime":"2017-06-01","CloseTime":"2017-11-30","Status":"closed"}]}'
	obj = eval('(' + data + ')')
	
	//$("#page-wrapper").load(partials)
	$("#page-wrapper").load(partials,function(response,status){
		if(status == "success"){
			var tbody = $("#project-list-table tbody")
			
			for (var i = 0; i < obj.projectList.length; i++) {
				var tr = $("<tr></tr>")
				var td = $("<td>" + obj.projectList[i].ID + "</td>")
				tr.append(td)
				td = $("<td>" + obj.projectList[i].ProjectName + "</td>")
				tr.append(td)
				td = $("<td>" + obj.projectList[i].OpenTime + "</td>")
				tr.append(td)
				td = $("<td>" + obj.projectList[i].CloseTime + "</td>")
				tr.append(td)
				td = $("<td>" + obj.projectList[i].Status + "</td>")
				tr.append(td)
				td = $('<td><a href="#" onclick="NoneFunc">Edit</a> <a href="#" onclick="NoneFunc">Bonus Payment</a> <a href="#" onclick="NoneFunc">Bonus Reset</a></td>')
				tr.append(td)
				tbody.append(tr)
			};
		}		
	})
}

function NoneFunc(){

}