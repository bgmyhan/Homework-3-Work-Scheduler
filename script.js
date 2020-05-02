// Moments//
const now = moment().format('MMMM Do YYYY');

// Display Current Date Inside Header
var navDisplay = document.getElementById("currentDay");

navDisplay.innerText = now ;


    /////// Programatically built callendar///////
    // Creating Elements for html doc//
    
  
    // Formatting length of blocks
    var times = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
    for (i = 0; i < times.length; i ++){
        
        var timeBlock = document.createElement('div');
        timeBlock.id = 'iTBlock';
        timeBlock.className = 'cTBlock';
        todayTime = document.createElement('h1');
        $(timeBlock).append(todayTime);
        $(".container").append(timeBlock);
        console.log($('container'));
        todayTime = now;
    
    
            // time Block
            var userBlock = document.createElement('div');
            userBlock.id = 'iUBlock';
            userBlock.className = 'cUBlock';
            userBlock.innerText = times[i] ;
    
            // User Input Block
            userText = document.createElement('textarea');
            userText.id = times[i];
            $(userBlock).append(userText);
            $(userText).attr('placeholder', 'To dos');
            // localStorage.setItem(userText, JSON.stringify(  ) );
            // var arr = JSON.parse( localStorage.getItem(userText) );

           

            $(timeBlock).append(userBlock);


    
            // Save Block
            var saveBlock = document.createElement('button');
            saveBlock.id = 'iSBlock';
            saveBlock.className = 'cSBlock';
            saveBlock.innerText = "Submit";
            $(userBlock).append(saveBlock);
    

           }

        //  End of timeBlock div //
        
    



    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("el")
