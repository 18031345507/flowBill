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
	        formatter: "{b}<br/> {c} ({d}%)"

	    },
	    series: [
	        {
	            name:'',
	            type:'pie',
	            radius: ['30%', '55%'],

	            data:[
	                {value:40, name:'月包'},
	                {value:100, name:'一次性包'},
	                {value:90, name:'其他'},
	                {value:120, name:'结转'},
	                {value:120, name:'主套餐'}
	            ]
	        }
	    ],
	    color:[
	    	 '#ff9900', '#ff80fc', '#a8a8a8', '#15becf', '#9bb300'
	    ]
	}

})();
