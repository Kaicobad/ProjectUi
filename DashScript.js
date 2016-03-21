$.getJSON("DashJSON.json",loadOptions)

function loadOptions(data) {
	console.log(data);
	console.log(data.ManageRoute);
	console.log(data.ManageBus);
	console.log(data.BusTicketInfo);

	$.each(data.ManageRoute, function(index, value) {		
		var routes = $("<li>", {
			"text" : value
		});
		routes.appendTo($("#routes"));
	});

	$.each(data.ManageBus, function(index, value) {		
		var Bus = $("<li>", {
			"text" : value
		});
		Bus.appendTo($("#Bus"));
	});
	$.each(data.BusTicketInfo, function(index, value) {		
		var TicketInfo = $("<li>", {
			"text" : value
		});
		TicketInfo.appendTo($("#TicketInfo"));

	});
}
