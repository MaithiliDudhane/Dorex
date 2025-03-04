<?php


session_start();
if(!isset($_SESSION)) {session_start();}

include_once("functions.php");

if(isset($_GET['action'])&&$_GET['action']=='login')
{


  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;
  $res= getalldetails("tblregistration","`iId`, `sName`, `sMobileNo`, `sEmailid`,`sAddress`, `sGender`, `sRole`, `dtDateOfJoining`,`sPassword`,`sConfirmPassword`","sMobileNo='$json->sMobileNo'");
   $datar= json_decode($res);
   $output=array();
    if(count($datar->records)>0)
    {
      //  $user= $datar->records[0];
      //  $hash=checkhashSSHA($json->sPassword);
      
       $res= getalldetails("tblregistration","`iId`, `sName`, `sMobileNo`, `sEmailid`,`sAddress`, `sGender`, `sRole`, `dtDateOfJoining`,`sPassword`,`sConfirmPassword`","sMobileNo='$json->sMobileNo' and sPassword='$json->sPassword'");
       $datar= json_decode($res);
       if(count($datar->records)>0)
       {

        $output['result']="2";
      
         $output['records']=$datar->records;
       }else{
        $output['result']="1";
       }
    }else{
      $output['result']="3";
    }

    echo json_encode($output);

}
if(isset($_GET['action'])&&$_GET['action']=='adduser')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

    echo  insert_table("tblregistration","sName,sEmailId,sMobileNo,sAddress,sGender,sRole,dtDateOfJoining,sPassword,sConfirmPassword,bisActive","'$json->sName','$json->sEmailId','$json->sMobileNo','$json->sAddress','$json->sGender','$json->sRole','$json->dtDateOfJoining','$json->sPassword','$json->sConfirmPassword',1");

}
if(isset($_GET['action'])&&$_GET['action']=='getuser')
{

echo getalldetails("tblregistration","*","bisActive=1");
}

if(isset($_GET['action'])&&$_GET['action']=='forgot')
{
   //read post object
  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;
 // echo $json->sMobileNo;

   $k= getalldetails("tblregistration","*","sMobileNo='$json->sMobileNo'");
  //echo $k;
  $datl= json_decode($k);

   if(count($datl->records)>0)
   {
       //records availabe
      // echo "p";

      //  $pass=rand(100000,999999);
      //  echo $pass;
      //  $enct=hashSSHA($pass);
     

       echo  update_table("tblregistration","sPassword,sConfirmPassword","'$json->sPassword'`'$json->sConfirmPassword'","sMobileNo=$json->sMobileNo");

       
   }
   else{
     //not available
    // echo "np";

     $s['records']=array();
     $s['result']="3";

   print($s['records']);

    echo json_encode($s);

   }
}
if(isset($_GET['action'])&&$_GET['action']=='addGodavan')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;
  if($json)
      echo  insert_table("tblgodavan","sGodavanId,sGodavanName,sMobileNo,sAddress,dDate,sCity,bisActive","'$json->sGodavanId','$json->sGodavanName','$json->sMobileNo','$json->sAddress',now(),'$json->sCity',1");

}
if(isset($_GET['action'])&&$_GET['action']=='getGodavan')
{

echo getalldetails("tblgodavan","*","bisActive=1");
}

if(isset($_GET['action'])&&$_GET['action']=='addOrder')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;
  if($json)
  {
      // $sAWBno=uniqid(AWB2024);
  // $AWBSNo=uniqid('AWB2024');

  echo  insert_table("tblbookshippment","sAWBno,sSource,sDestination,dWeight,dVolume,sShippmentType,sPriority,sSenderName,sSenderMobileNo,sReciverName,sReciverMobileNo,bisActive,dtotalcost,sImage,dtDate,sStatus,sSenderEmail,sReceiverEmail","'$json->sAWBno','$json->sSource','$json->sDestination','$json->dWeight','$json->dVolume','$json->sShippmentType','$json->sPriority','$json->sSenderName','$json->sSenderMobileNo','$json->sReciverName','$json->sReciverMobileNo',1,'$json->dtotalcost','$json->sImage',now(),'Pending','$json->sSenderEmail','$json->sReceiverEmail'");

  }

}
if(isset($_GET['action'])&&$_GET['action']=='updateorder')
{ 
    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;
                                                                                                                                                                                                                                                // sAWBno,sSource,sDestination,dWeight,dVolume,sShippmentType,sPriority,sSenderName,sSenderMobileNo,sReciverName,sReciverMobileNo,bisActive,dtotalcost,sImage,sStatus,sSenderEmail,sReceiverEmail                                                                                 
       echo  update_table("tblbookshippment","sAWBno,sSource,sDestination,dWeight,dVolume,sShippmentType,sPriority,sSenderName,sSenderMobileNo,sReciverName,sReciverMobileNo,bisActive,dtotalcost,sImage,dtDate,sStatus,sSenderEmail,sReceiverEmail","'$json->sAWBno'`'$json->sSource'`'$json->sDestination'`'$json->dWeight'`'$json->dVolume'`'$json->sShippmentType'`'$json->sPriority'`'$json->sSenderName'`'$json->sSenderMobileNo'`'$json->sReciverName'`'$json->sReciverMobileNo'`1`'$json->dtotalcost'`'$json->sImage'` now()`'$json->sStatus'`'$json->sSenderEmail'`'$json->sReceiverEmail'","iId='$json->iId'");

    //echo json_encode($json->data[0]->name);
}
 
 
if(isset($_GET['action'])&&$_GET['action']=='cancelorder')
{

    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data;


  echo  delete_table("tblbookshippment","bisActive","iId=$json->iId");

    

    //echo json_encode($json->data[0]->name);
}

if(isset($_GET['action'])&&$_GET['action']=='selectorder')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data;

  echo getalldetails("tblbookshippment","*","bisActive=1");
    

}  
 
if(isset($_GET['action'])&&$_GET['action']=='addcomplaint')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tblcomplaint","bisActive,sAWBno,sFullname,sEmail,sReason,sMessage","1,'$json->sAWBno','$json->sFullname','$json->sEmail','$json->sReason','$json->sMessage'");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='anscomplaint')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tblanscomplaint","bisActive,sFirstname,sLastname,sEmail,sReason,sMessage,sReplay","1,'$json->sFirstname','$json->sLastname','$json->sEmail','$json->sReason','$json->sMessage','$json->sReplay'");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='addfeedback')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

  

  echo  insert_table("tblfeedback","sAWBno,sFullname,sEmail,sMobileNo,sSatiesfy,sSuggestions,bisActive","'$json->sAWBno','$json->sFullname','$json->sEmail','$json->sMobileNo','$json->sSatiesfy','$json->sSuggestions',1");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='getAllFeedBack')
{


echo getalldetails("tblfeedback","*","bisActive=1");


} 
if(isset($_GET['action'])&&$_GET['action']=='getAllComplaint')
{


echo getalldetails("tblcomplaint","*","bisActive=1");


} 
if(isset($_GET['action'])&&$_GET['action']=='getAllAnscomplaint')
{


echo getalldetails("tblanscomplaint","*","bisActive=1");


} 
if(isset($_GET['action'])&&$_GET['action']=='addAnsCompalint')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

  

  echo  insert_table("tblanscomplaint","sAnsweredBy,sReason,sMessage,sReplay,sAWBNo,sFullname,sEmail,bisActive","'$json->sAnsweredBy','$json->sReason','$json->sMessage','$json->sReplay','$json->sAWBNo','$json->sFullname','$json->sEmail',1");
    
       
    //echo json_encode($json->data[0]->name);
}

if(isset($_GET['action'])&&$_GET['action']=='contactus')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;


// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

echo  insert_table("tblcontactus","sName,sEmail,sMobileNo,sMessage,bisActive","'$json->sName','$json->sEmail','$json->sMobileNo','$json->sMessage',1");
    
       
    //echo json_encode($json->data[0]->name);
}

if(isset($_GET['action'])&&$_GET['action']=='deleteorderbyAWB')
{

    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;


  echo  delete_table("tblbookshippment","bisActive","iId=$json->iId");

    

    //echo json_encode($json->data[0]->name);
}

if(isset($_GET['action'])&&$_GET['action']=='insertimg')
{
   
  //print_r($_POST['data']);
  if(!empty($_FILES))  
  {  
       $path = 'upload/' .'_'.uniqid(). $_FILES['file']['name'];  
       $url="http://192.168.146.141/api/".$path;
       $result=array();
       if(move_uploaded_file($_FILES['file']['tmp_name'], $path))  
       { 
          $result['result']=1;
          $result['imgurl']=$url;
          echo json_encode($result);
       }
       else {
        $result['result']=0;
        $result['imgurl']="";
        echo json_encode($result);
       }
 }
}
if(isset($_GET['action'])&&$_GET['action']=='getorderbyAwbsid')
 {
 
   $post_date = file_get_contents("php://input");
   $data = json_decode($post_date);
   $json=$data->data;
  
   echo getalldetails("tblbookshippment","*","sAWBno='$json->sAWBno' and  `bisActive`=1");

 
 }

  
/*
if(isset($_GET['action'])&&$_GET['action']=='updateuser')
{ 
    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;

       echo  update_table("tblregister","sUserName,sMobileno,sEmailid,sPassword,sConfirmPassword","'$json->sUserName'`'$json->sMobileno'`'$json->sEmailid'`'$json->sPassword'`'$json->sConfirmPassword'","iId=$json->iId");

    //echo json_encode($json->data[0]->name);
}
 
if(isset($_GET['action'])&&$_GET['action']=='deleteuser')
{

    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;


  echo  delete_table("tblregister","*","iId=$json->iId");

    

    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='addinvoice')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tbinvoicerecord","sInvoiceNo,dtDate,sOwnerName,sOwnerAddress,sOwnerCity,sOwnerZipCode,sOwnerCountry,sOwnerMobileNo,sUserName,sUserAddress,sUserCity,sUserZipCode,sUserCountry,sUserMobileNo,sPO,sSalesRepName,dtShipDate,sShipVia,sTerms,dtDueDate,sProductId,sDescription,dTaxRate,dUnitPrice,iQuantity,dLineTotal,dSubTotal,dCGST,dSGST,dShippingHandling,dTotal,dPaid,dTotalDue,sNote,iId,sImageURL,dtUpdateDate,bIsActive",
  "'$json->sInvoiceNo','$json->dtDate','$json->sOwnerName','$json->sOwnerAddress','$json->sOwnerCity','$json->sOwnerZipCode','$json->sOwnerCountry','$json->sOwnerMobileNo','$json->sUserName','$json->sUserAddress','$json->sUserCity','$json->sUserZipCode','$json->sUserCountry','$json->sUserMobileNo','$json->sPO','$json->sSalesRepName','$json->dtShipDate','$json->sShipVia','$json->sTerms','$json->dtDueDate','$json->sProductId','$json->sDescription',
  '$json->dTaxRate','$json->dUnitPrice','$json->iQuantity','$json->dLineTotal','$json->dSubTotal','$json->dCGST','$json->dSGST','$json->dShippingHandling','$json->dTotal','$json->dPaid','$json->dTotalDue','$json->sNote','$json->iId','$json->sImageURL','$json->dtUpdateDate','$json->bIsActive'");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='updateinvoice')
{ 
    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;

       echo  update_table("tbinvoicerecord","sInvoiceNo,dtDate,sOwnerName,sOwnerAddress,sOwnerCity,sOwnerZipCode,sOwnerCountry,sOwnerMobileNo,sUserName,sUserAddress,sUserCity,sUserZipCode,sUserCountry,sUserMobileNo,sPO,sSalesRepName,dtShipDate,sShipVia,sTerms,dtDueDate,sProductId,sDescription,dTaxRate,dUnitPrice,iQuantity,dLineTotal,dSubTotal,dCGST,dSGST,dShippingHandling,dTotal,dPaid,dTotalDue,sNote,iId,sImageURL,dtUpdateDate,bIsActive",
       "'$json->sInvoiceNo'`'$json->dtDate'`'$json->sOwnerName'`'$json->sOwnerAddress'`'$json->sOwnerCity'`'$json->sOwnerZipCode'`'$json->sOwnerCountry'`'$json->sOwnerMobileNo'`'$json->sUserName'`'$json->sUserAddress'`'$json->sUserCity'`'$json->sUserZipCode'`'$json->sUserCountry'`'$json->sUserMobileNo'`'$json->sPO'`'$json->sSalesRepName'`'$json->dtShipDate'`'$json->sShipVia'`'$json->sTerms'`'$json->dtDueDate'`'$json->sProductId'`'$json->sDescription'`
       '$json->dTaxRate'`'$json->dUnitPrice'`'$json->iQuantity'`'$json->dLineTotal'`'$json->dSubTotal'`'$json->dCGST'`'$json->dSGST'`'$json->dShippingHandling'`'$json->dTotal'`'$json->dPaid'`'$json->dTotalDue'`'$json->sNote'`'$json->iId'`'$json->sImageURL'`'$json->dtUpdateDate'`'$json->bIsActive'","iId=$json->iId");

    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='deleteinvoice')
{

    $post_date = file_get_contents("php://input");
    $data = json_decode($post_date);
    $json=$data->data;



  echo  delete_table("tbinvoicerecord","bisActive","iId=$json->iId");


    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='getinvoice')
{

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$json=$data;


echo getalldetails("tbinvoicerecord","*","bisActive=1");
}



if(isset($_GET['action'])&&$_GET['action']=='addorder')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tborder","sAWBNo ,sDestinationAddress,sPinCode,dWeight,dVolumetricWeight,sMobileNo,sDescripition,sOtherDetail1,sOtherDetail2,sOtherDetail3,bisActive",
  "'$json->sAWBNo','$json->sDestinationAddress','$json->sPinCode','$json->dWeight','$json->dVolumetricWeight','$json->sMobileNo','$json->sDescripition','$json->sOtherDetail1','$json->sOtherDetail2','$json->sOtherDetail3','$json->bisActive'");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='getorder')
{

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$json=$data;


echo getalldetails("tborder","*","bisActive=1");
}

if(isset($_GET['action'])&&$_GET['action']=='addtransit')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tbtransit","sAWBNo ,sShipingAddress,sShipingPinCode,sShipingMobileNo,sUserAddress,sUserPinCode,sUserMobileNo,sOtherDetail1,sOtherDetail2,sOtherDetail3,bisActive",
  "'$json->sAWBNo','$json->sShipingAddress','$json->sShipingPinCode','$json->sShipingMobileNo','$json->sUserAddress','$json->sUserPinCode','$json->sUserMobileNo','$json->sOtherDetail1','$json->sOtherDetail2','$json->sOtherDetail3','$json->bisActive'");
    
       
    //echo json_encode($json->data[0]->name);
}

if(isset($_GET['action'])&&$_GET['action']=='gettransit')
{

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$json=$data;


echo getalldetails("tbtransit","*","bisActive=1");
}
if(isset($_GET['action'])&&$_GET['action']=='addoperator')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tboperator","sOperatorName ,sOperatorMobileNo,sOperatorGender	,sOperatorAddress,bisActive","'$json->sOperatorName','$json->sOperatorMobileNo','$json->sOperatorGender','$json->sOperatorAddress','$json->bisActive' ");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='getoperator')
{

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$json=$data;


echo getalldetails("tboperator","*","bisActive=1");
}

if(isset($_GET['action'])&&$_GET['action']=='addsupervisor')
{

  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;

// echo $json->sPassword;
//   $enct=hashSSHA($json->sPassword);
  

  echo  insert_table("tbsupervisor","sSupervisorName,sSupervisorMobileNo,sSupervisorGender,sSupervisorAddress,bisActive", "'$json->sSupervisorName','$json->sSupervisorMobileNo','$json->sSupervisorGender','$json->sSupervisorAddress','$json->bisActive'");
    
       
    //echo json_encode($json->data[0]->name);
}
if(isset($_GET['action'])&&$_GET['action']=='getsupervisor')
{

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
$json=$data;


echo getalldetails("tbsupervisor","*","bisActive=1");
}
*/
?>