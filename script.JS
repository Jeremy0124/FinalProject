$('#submitButton').on('click',function (){

    if ($("#displayName").val() === ""){
        $("#output").text(`You need a Display Name`)
      }
      else if ($("#com").val() === ""){
        $("#output").text(`No Comment`)
      }
      else {
        $('#FinishComment').append(` <div class = FCom>

          <div class = userIMG> </div>

          <div class = userName>${$("#displayName").val()}</div>
         
          <div class = userCom> ${$("#com").val()}</div>

            <div class = editButton> 
                  <button id = editb class = editb = b> Edit</button> 
            </div>

            <div class = deleteButton> 
                <button id = dbutton class = dbutton> Delete</button> 
            </div>

        

            <div class = "editFarm nodisplay"> 

                <input id = "NewText" class = 'NewText' Placeholder = "NEW TEXT"> 
                <button id = NewButton class = 'NewButton'> SUMBIT!</button>
                
            </div>

         </div>`);
      }
});


$('#FinishComment').on('click','#editb',function(){
  let editFarm = $(this).parents()[0];
  let NextEditFarm = $(editFarm).next();
  let NextNextEditFarm = $(NextEditFarm).next();
  let child = $(NextNextEditFarm).children ()[0];
  $(NextNextEditFarm).toggleClass('nodisplay')

  console.log(child)
});
//Delete button

$('#FinishComment').on('click', '#dbutton', function(){
  let parents = $(this).parents()[1];
  $(parents).remove();
});

//Edit button

$('#FinishComment').on('click','.NewButton',function(){
$('#com').text(`${$("#Newcom").val()}`);

let Newcom = $(this).prev()[0];
let NewNewcom = $(Newcom);

let NCOM = $(this).parents()[0];
let NNCOM = $(NCOM).prev()[0];
let NNNCOM = $(NNCOM).prev()[0];
let NNNNCOM = $(NNNCOM).prev()[0];

$(NNNNCOM).text(`${$(NewNewcom).val()}`)
});   