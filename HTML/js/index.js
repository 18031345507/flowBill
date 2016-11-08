(function(){
var now = {row:1}, last = {row:0};
const towards = {up:1,down:2};

s=window.innerHeight/500;
ss=250*(1-s);

$('.wrap').css('-webkit-transform','scale('+s+','+s+') translate(0px,-'+ss+'px)');

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

$(document).swipeUp(function(){
	last.row = now.row;
	if (last.row != 9) { now.row = last.row+1; pageMove(towards.up);}	

	if(now.row== 2){
		showqq();		
 	}
 	if(now.row== 3){
 		var myChart = echarts.init(document.getElementById("ch-pie"));
		myChart.setOption(option);		
 	}
})

function showqq(){
	 var main=$('#total').html();
     var done=$('.right em').html();
     var spercent=(done/main)*100;
     spercent= spercent.toFixed(0)+'%';
		
     var currentCount=0;
	 var flag = setInterval(function() {
        if ((currentCount+'%') ==spercent) {
            clearInterval(flag);
        }
		 else {
            (currentCount++)+'%';
         }
         $('.right').css({'height':(currentCount+'%'),'opacity':1});
    },30)
}
$(document).swipeDown(function(){
	last.row = now.row;
	if (last.row!=1) { now.row = last.row-1; pageMove(towards.down);}	
    
    if(now.row==2){
		showqq();	
    }
    if(now.row== 3){
    	var myChart = echarts.init(document.getElementById("ch-pie"));
		myChart.setOption(option);		
	
 	}
})


function pageMove(tw){
	var lastPage = ".page-"+last.row,
		nowPage = ".page-"+now.row;
//alert(nowPage);
	

	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;

		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
	}

	$(nowPage).removeClass("hide");
	
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);
	
	setTimeout(function(){
		$(lastPage).removeClass('page-current');
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("img").addClass("hide");
		
		$(nowPage).addClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("img").removeClass("hide");
	},600);
}

// 环形图配置项 
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: function(params, ticket, callback){
               var name = typeof(params.name) == "undefined"?"":params.name,
                  value = typeof(params.value) == "undefined" ? "":params.value + "M",
                     t1 = typeof(params.data.t1) == "undefined" ? "":params.data.t1 + ":",
                     f1 = typeof(params.data.f1) == "undefined"?"":params.data.f1 + "M",
                     t2 = typeof(params.data.t2) == "undefined" ? "":params.data.t2 + ":",
                     f2 = typeof(params.data.f2) == "undefined"?"":params.data.f2 + "M",
                     t3 = typeof(params.data.t3) == "undefined" ? "":params.data.t3 + ":",
                     f3 = typeof(params.data.f3) == "undefined"?"":params.data.f3 + "M";

			   var res = '<p>' +name+'</p>';
				   res+= '<span>'+value+'</span>';
				   res+= '<ul style="font-size:0.7rem;line-height:1;"><li style="border-left:2px solid #15becf;padding-left:5px;">'+t1+f1+'</li>';
				   res+= '<li style="border-left:2px solid #ff9900;padding-left:5px;margin:0.4rem 0;">'+t2+f2+'</li>';
				   res+= '<li style="border-left:2px solid #9bb300;padding-left:5px;">'+t3+f3+'</li></ul>';
			   setTimeout(function (){callback(ticket, res);}, 400);
               return 'loading';
	        }
	    },
	    series: [
	        {
	            name:'',
	            type:'pie',
	            radius: ['30%', '55%'],
	            data:[
	                {value:500, name:"月包"},
	                {value:1993, name:'一次性包',t1:"月包",f1:123,t2:"月包",f2:123,t3:"加油包",f3:123},
	                {value:1024, name:'其他',t1:"漫游包",f1:123,t2:"定向包",f2:123,t3:"夜间包",f3:123},
	                {value:1993, name:'结转',t1:"主套餐",f1:123,t2:"月包",f2:123},
	                {value:3072, name:'主套餐'}
	            ]
	        }
	    ],
	    color:[
	    	 '#ff9900', '#ff80fc', '#a8a8a8', '#15becf', '#9bb300'
	    ]
	}

})();
