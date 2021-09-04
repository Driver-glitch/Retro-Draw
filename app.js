
function makeGrid()
{
//start of loop

for(index = 0; index < 64; index++)
{
   const newDiv = $('<div>').attr('class','cell')

    $('.grid').append(newDiv)
    
}//end of for loop
}makeGrid();
//end of makeGrid

function makePalette()
{
    const PALETTE = [
      '#00BFFF',
       '#1E90FF',
       '#4169E1',
       '#0000FF',
       '#0000CD',
       '#00008B',
       '#000080',
       '#191970',
    ]
//end of array


//start of loop

   for (let i = 0; i < PALETTE.length; i++)
{

//accesses the color of the palette
        const nextColor = PALETTE[i]
      
      const newButton = $('<button>')
      newButton.css("background", nextColor)
      $('.palette').append(newButton)
} // end of loop

    $('.palette button').first().addClass('active');
  }makePalette();
  //end of makePalette function
  

function onPaletteClick() 
{

  $('.palette .active').removeClass('active');
  $(this).addClass('active');

}$('.palette button').click(onPaletteClick);

//end of onPaletteClick function

function onGridClick()
{ 
  
  $('.grid .cell').toggleClass('active')

   // This reads a css property:

let activeColor = $('.palette .active').css('background-color')
let cellColor = $(this).css('background-color')

   if(activeColor === cellColor)

   {
$(this).css('background-color', "")
   }else{
$(this).css('background-color', activeColor)
   }

  
}$('.grid .cell').click(onGridClick)

//end of onGridClick function

function onClearClick ()
{

  $('.controls .clear').click(onClearClick);
  $('.grid .cell').css('background-color', '');


}onClearClick();
//end of OnClearClick function

function onFillAllClick()
{
let color = $('.palette .active').css('background-color')

$('.palette .active').css('background-color')
$('.cell').css('background-color', color)

}$('.controls .fill-all').click(onFillAllClick);

//end of onFillAllClick function

function onFillEmptyClick()
{
let colors = $('.palette .active').css('background-color')
let cells = $('.cell');
    // code goes here
      for (let i = 0; i < cells.length; i++) {
let nextColors = $( cells[i] );
      if (nextColors.css('background-color') === 'rgba(0, 0, 0, 0)') {
        $(nextColors).css('background-color', colors);
    }
  }
}$('.controls .fill-empty').click(onFillEmptyClick)

//end of onFillEmptyClick function

function customClick(){

  let Color=prompt("Type a color");
  
}
$(".custom").click(customClick);

