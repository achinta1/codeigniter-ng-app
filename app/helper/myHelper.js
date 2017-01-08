function apiModifyTable(originalData,id,response){
    angular.forEach(originalData, function (item,key) {
			console.log("==Helper::===>>");
        if(item.id == id){
            originalData[key] = response;
        }
    });
    return originalData;
}