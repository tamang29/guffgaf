function validate_login()
{
 var uname=document.getElementById('username').value;
 var pass=document.getElementById('log_pass').value;
 
    if(uname=='' || pass=='')
    {
        alert('None of the fields should be empty');
        exit();
    }
}

function validate_sign()
{
    var fname=document.getElementById('first').value;
    var lname=document.getElementById('second').value;

    var patt=/[0-9]/i;
    var result=patt.test(fname);
    if(result==true)
    {
        alert('No numeric Value in First Name');
    }
    var result2=patt.test(lname);
    if(result2==true)
    {
        alert('No numeric Value in Second Name');
    }

}