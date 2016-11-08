    new WOW().init();
        // 第二屏高度赋值
        var arr = new Array();
        var main=$('#total').html();
        $('.hh').each(function(i){
            arr.push($(this).attr("title"));
        })
        //调用..
        for(i in arr){
          var percent=(arr[i]/main)*100;
          percent= percent.toFixed(1)+'%';
          $('.hh').eq(i).css({'height':percent});
          $('.hh p').eq(i).html(percent);
        } 

        // 第四屏高度赋值
        var arr = new Array();
        $('.branch em').each(function(i){
            arr.push($(this).attr("title"));
        })
        //调用..
        for(i in arr){
          var max=Math.max.apply(null,arr);
          var percent=(arr[i]/max)*100+'%';
          var percent0=(arr[0]/max)*100+'%';
          var percent1=(arr[1]/max)*100+'%';
          var percent2=(arr[2]/max)*100+'%';
          var percent3=(arr[3]/max)*100+'%';
          var percent4=(arr[4]/max)*100+'%';
          var percent5=(arr[5]/max)*100+'%';
          var percent6=(arr[6]/max)*100+'%';

          var Atop=arr[i]/max*(-10)+'rem';
          var Atop0=arr[0]/max*(-10)+'rem';
          var Atop1=arr[1]/max*(-10)+'rem';
          var Atop2=arr[2]/max*(-10)+'rem';
          var Atop3=arr[3]/max*(-10)+'rem';
          var Atop4=arr[4]/max*(-10)+'rem';
          var Atop5=arr[5]/max*(-10)+'rem';
          var Atop6=arr[6]/max*(-10)+'rem';

          // 没有数据默认状态
          if(arr[i]==0){
             $('.branch p').eq(0).css({'height':'8rem','top':'-8rem'});
             $('.branch p').eq(1).css({'height':'3rem','top':'-3rem'});
             $('.branch p').eq(2).css({'height':'7rem','top':'-7rem'});
             $('.branch p').eq(3).css({'height':'10rem','top':'-10rem'});
             $('.branch p').eq(4).css({'height':'7.2rem','top':'-7.2rem'});
             $('.branch p').eq(5).css({'height':'6.5rem','top':'-6.5rem'});
             $('.branch p').eq(6).css({'height':'9rem','top':'-9rem'});

             $('.branch li').eq(i).css('opacity',0.3);
             $('.branch p i').eq(i).css('display','none');
             $('.branch span').eq(i).css('color','#2d3247');
          }
         
         //第一个有数据
         if(arr[0]>0){
             $('.branch p').eq(0).css({'height':percent0,'top':Atop0});
         }
          //第一个有数据
         if(arr[1]>0){
             $('.branch p').eq(1).css({'height':percent1,'top':Atop1});
         }
          //第一个有数据
         if(arr[2]>0){
             $('.branch p').eq(2).css({'height':percent2,'top':Atop2});
         }
          //第一个有数据
         if(arr[3]>0){
             $('.branch p').eq(3).css({'height':percent3,'top':Atop3});
         }
          //第一个有数据
         if(arr[4]>0){
             $('.branch p').eq(4).css({'height':percent4,'top':Atop4});
         }
         // 第六个有数据
        if(arr[5]>0){
             $('.branch p').eq(5).css({'height':percent5,'top':Atop5});
         }
         // 第七个有数据
         if(arr[6]>0){
             $('.branch p').eq(6).css({'height':percent6,'top':Atop6});
         }

          // 最高高度加皇冠
          if(arr[i]>0&&arr[i]==max){
            $('.branch em').eq(i).addClass('active').removeClass('old');
          }
        }  
