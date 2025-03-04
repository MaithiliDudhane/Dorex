<?php

ini_set('memory_limit', '2024M');
ini_set('memory_limit', '2024M');
$key="samnkaslfnaklfnaldkasn";
set_time_limit(100000);

  if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        
    }

include_once("connection.php");


function Sanitize($str,$remove_nl=true)
    {
        $str = aStripSlashes($str);

        if($remove_nl)
        {
            $injections = array('/(\n+)/i',
                '/(\r+)/i',
                '/(\t+)/i',
                '/(%0A+)/i',
                '/(%0D+)/i',
                '/(%08+)/i',
                '/(%09+)/i'
                );
            $str = preg_replace($injections,'',$str);
        } 

        return $str;
    } 
	
    
	 function SanitizeForSQL($str)
   {
        if( function_exists( "mysqli_real_escape_string" ) )
        {
              $ret_str = mysqli_real_escape_string($GLOBALS["link"],$str );
        }
        else
        {
              $ret_str = addslashes( $str );
        }
        return $ret_str;
    }
	
	 function aStripSlashes($str)
    {
        if(get_magic_quotes_gpc())
        {
            $str = stripslashes($str);
        }
        return $str;
    } 
	function GetSpamTrapInputName()
    {
        return 'sp'.md5('KHGdnbvsgst'.'jhxHgrCk0VznPsg');
    } 
	
	 function SetRandomKey($key)
    {
       // $this->rand_key = $key;
		//$this->randomkey = 'jhxHgrCk0VznPsg';
    }
     function hashSSHA($password) {
 
        $salt = sha1(rand());
        $salt = substr($salt, 0, 10);
        $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
        $hash = array("salt" => $salt, "encrypted" => $encrypted);

	   return $hash;
    }
	 function IsFieldUnique($vars,$fieldname)
    {
		
        $field_val = SanitizeForSQL($vars);
        $qry = "select * from `tblUserRegistraion` where $fieldname='".$field_val."'";
	
	   $result = mysqli_query($GLOBALS["link"],$qry);  
       if($result && mysqli_num_rows($result) > 0)
        {
			
            return false;
        }
        return true;
    }
	  function checkhashSSHA($salt, $password) {
 
        $hash = base64_encode(sha1($password . $salt, true) . $salt);
 
        return $hash;
    }
		function getOtp()
	{
		return mt_rand(1000,9999);
	}


  function sendWhatsappmessage($mob,$msg){

    echo "s";
    $url = "https://wtsapp.aronertech.com/api/sendText?token=62becd5380b2deddb3b36c64&phone=91".$mob."&message=".$msg."";
          //  $url="https://wtsapp.aronertech.com/api/sendText?token=62becd5380b2deddb3b36c64&phone=".$mob."&message=".$msg;
          $crl = curl_init($url);
          //   echo 'https://api.dunzo.in/api/v1/quote?'.$k1;
   curl_setopt($crl, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.52 Safari/537.17');
     curl_setopt($crl, CURLOPT_AUTOREFERER, true); 
     curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
     curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
     curl_setopt($crl, CURLOPT_VERBOSE, 1);
          curl_setopt($crl, CURLOPT_POST, false);

          curl_setopt($crl, CURLOPT_HTTPHEADER, array(
        
              'Accept-Language: en_US',
              'Content-Type: application/json')

          );
          $result = curl_exec($crl);
          echo $result;
          if (curl_errno($crl)) { 
      //        echo "a";
       //    print curl_error($crl); 
          } 
          curl_close($crl); 
           //  curl_close($ch);


  }

  function sendNotificationUser($title,$msg,$userid) {

    $db = new DbOperation();
    $db_app=new DbOperation_app();
    
    $mydate=getdate(date("U"));
      $mydatenew="$mydate[weekday], $mydate[month] $mydate[mday], $mydate[year]";
      //if the push don't have an image give null in place of image
      $push = new Push(
        $title,
        $msg,
        null);
    
      $db_app= new DbOperation_app();
      $mPushNotification = $push->getPush();
      $devicetoken = $db_app->getAllDevices_app_user($userid);
      $firebase = new Firebase(); 
       $firebase->send($devicetoken, $mPushNotification);
  
    }

    
  

    function sendNotificationVendor($title,$msg,$vid) {
      $db = new DbOperation();
      $db_app=new DbOperation_app();
      

      $mydate=getdate(date("U"));
      $mydatenew="$mydate[weekday], $mydate[month] $mydate[mday], $mydate[year]";
      
      $push = new Push(
      'o'.'`'.$title.'`'.$mydatenew.'`asas',
      $msg,
      'null'
      );
    
      $db= new DbOperation();
      $mPushNotification = $push->getPush(); 
      $devicetoken = $db->getAllTokensbyid($vid,'v');
      $firebase = new Firebase();  
      $firebase->send($devicetoken, $mPushNotification);
    
      }
//=================================================25-06-2020=============================

function getalldetails_q($q)

 {

	   

	  $query =$q;

	  $result=mysqli_query($GLOBALS['link'],$query);

    // print_r($query);

	 	  	    if($result)

				  {

		             $output=array();

		             while($row=mysqli_fetch_assoc($result))

      					 {

      						 $output[]=$row;

      					 }

    					  $s['records']=$output;

                          $s['q']=$query;

    					  $s['result']="4";



					  return json_encode($s);



				  }

				  else

				  { 

                      $s['q']=$query;

					  $s['result']="5";

					  return json_encode($s);

				  }

}
function getalldetails_test($table,$coloumn,$condition)

 {

	   

	  $query ="SELECT  ".$coloumn." from ".$table." where ".$condition."";

	  $result=mysqli_query($GLOBALS['link'],$query);

     print_r($query);

	 	  	    if($result)

				  {

		             $output=array();

		             while($row=mysqli_fetch_assoc($result))

      					 {

      						 $output[]=$row;
      					//  echo $row['sName'].";".$row['sDescription'];

      					 }

    					  $s['records']=$output;

                          $s['q']=$query;

    					  $s['result']="4";

                       //  print($s['records']);
                      // print_r($s);
					  return json_encode($s);



				  }

				  else

				  { 

                      $s['q']=$query;

					  $s['result']="5";

					  return json_encode($s);

				  }

}
function getalldetails($table,$coloumn,$condition)

 {

	   

	  $query ="SELECT  ".$coloumn." from ".$table." where ".$condition."";

	  $result=mysqli_query($GLOBALS['link'],$query);

    // print_r($query);

	 	  	    if($result)

				  {

		             $output=array();

		             while($row=mysqli_fetch_assoc($result))

      					 {

      						 $output[]=$row;
      					//	 echo $row['sName'].";".$row['sDescription'];

      					 }

    					  $s['records']=$output;

                          $s['q']=$query;

    					  $s['result']="4";

                       //  print($s['records']);

					  return json_encode($s);



				  }

				  else

				  { 

                      $s['q']=$query;

					  $s['result']="5";

					  return json_encode($s);

				  }

}

if(isset($_GET['action'])&&$_GET['action']=='getallConsumer')

{

  $post_date = file_get_contents("php://input");

  $data = json_decode($post_date);

  $json=$data->data;
  


  echo getalldetails("master1","`cons_no`, `name`, `meter_no`, `dtcno`, `conn_load`,cell,mri,kwh_t,consump,avg_cons",

  "cons_no Not in (select cons_no from monthly_entry where bIsactive=1) and dtcno in (SELECT `dtc_no` FROM `dtc_assign` where `sName`= ".$json->id." and bIsActive=1) ORDER by `cons_no` DESC limit ".$json->page.",300 ");

}

if(isset($_GET['action'])&&$_GET['action']=='getdashboard')

{

  $post_date = file_get_contents("php://input");

  $data = json_decode($post_date);

  $json=$data->data;
  

  echo getalldetails("monthly_entry","(SELECT count(*) from master1 
  where dtcno in (SELECT dtc_assign.dtc_no from dtc_assign 
  WHERE  dtc_assign.sName=$json->id and bIsActive=1) ) as Total , 
  count(*) as count",

  "monthly_entry.other2=$json->id and MONTH(monthly_entry.Date) = MONTH(CURRENT_DATE())");

}

function  insert_table($table,$column,$formvalues)

{

  $query="INSERT INTO ".$table." (".$column.") select ".$formvalues."";

  $result=mysqli_query($GLOBALS['link'],$query);

  if($result)

  {

    $data['result']="1";

    $data['q']=$query;

    return json_encode($data);

  }  

  else

  { 

    $data['result']="5";

    $data['q']=$query;

    return json_encode($data);

  }



}
function getnextid($table,$concatstr,$col)
 {
  
   // $accid=$_SESSION['aqua_accountid'];
    $query ="SELECT case when count(*)>0 then concat('".$concatstr."-',DATE_FORMAT( CONVERT_TZ( NOW( ) ,  '-7:00',  '+5:30' ),'%d%m%y'),MAX(CONVERT(substring(".$col.",11),unsigned integer))+1)
    else concat('$concatstr-',DATE_FORMAT( CONVERT_TZ( NOW( ) ,  '-7:00',  '+5:30' ),'%d%m%y'),'0') end
            FROM ".$table." where 1";
         
    $result=mysqli_query($GLOBALS['link'],$query);
    $output= array();
    if($result)
    {
      $row=mysqli_fetch_array($result);
     // $data['result'] ="1";
        //  $data['records'] = $row[0];
      return  $row[0];
    }
    else
    { 
        // $data['result']='5';
     return "5";
    }
}
function delete_table_permanant($table,$condition)
  {  
    $query="delete from ".$table."  where ".$condition;
    $result=mysqli_query($GLOBALS['link'],$query);
    if($result)
    {
      $data['result']="3";
      $data['q']=$query;
      return json_encode($data);

    }  
    else
    { 
      $data['q']=$query;
      $data['result']="5";
      return json_encode($data);
    }
 }
function  update_table($table,$column,$formvalues,$condition)
	{
		 $query="update ".$table." set ";
	     $str="";
         $k=0;  
            foreach (array_combine(explode(",",$column), explode("`",$formvalues)) as $col => $val) {

                 $str.= $col."=".$val;
                 if($k<count(explode(",",$column))-1)
                   $str.=",";
                 $k++; 
            }
        
         $query .= $str." where ".$condition;
         $result=mysqli_query($GLOBALS['link'],$query);

          if($result)
          {
             $data['result']="2";
             $data['q']=$query;
             return json_encode($data);
          }  
          else
          { 

              $data['result']="5";
              $data['q']=$query;
              return json_encode($data);
          }
    }

    function delete_table($table,$col,$condition)
    {
  
      //$accid=$_SESSION[GetLoginSessionVar()];
  
      $query="update ".$table."  set ".$col."=0 where ".$condition;
      $result=mysqli_query($GLOBALS['link'],$query);
      if($result)
      {
        $data['result']="3";
        $data['q']=$query;
        return json_encode($data);
      }  
      else
      { 
        $data['result']="5";
        $data['q']=$query;
        return json_encode($data);
      }
   }    
function GetLoginSessionVar()
   {
        $retvar = md5('0iQx5oBk66oVZep');
        $retvar = 'adi_'.substr($retvar,0,10);
        return $retvar;
   }
function checkloginandroid()
	{
		$formvars = array();
		
	
		$formvars["mobile"]= Sanitize($_POST['username']);
		$formvars["password"]= Sanitize($_POST['password']);
		//$formvars["token"]= Sanitize($_POST['token']);
	    
        $qry = "select * from `tbluserregistration` where sEmail='".SanitizeForSQL($formvars["mobile"])."' or sMobile='".SanitizeForSQL($formvars["mobile"])."'";
    //echo $qry;
	    $result = mysqli_query($GLOBALS["link"],$qry);  
        if($result && mysqli_num_rows($result) <= 0)
        {
			
	        return 0;
        }
		
		$row=mysqli_fetch_row($result);
		//echo $row[4];
		//echo $formvars["password"];
		
        $hash=checkhashSSHA($row[4], $formvars["password"]);
        
		$qry = "select iId,sName,sMobile,sEmail from `tbluserregistration` where iId=".$row[0]." and sPassword='".$hash."'";
 		$result = mysqli_query($GLOBALS["link"],$qry);  
        if($result && mysqli_num_rows($result) <= 0)
        {
	        return -1;
        }
        //echo $qry;
		$row=mysqli_fetch_row($result); 
	
        
	//return 0; 
		return $row[0].'~'.$row[1].'~'.$row[3].'~'.$row[2];
  }
//=============================================================================================================

//=============================================27-06-2020===================================================================

if(isset($_GET['action'])&&$_GET['action']=='SubmitBill')

{
  $post_date = file_get_contents("php://input");
  $data = json_decode($post_date);
  $json=$data->data;


  $imageData = base64_decode($json->imgattach);
  $source = imagecreatefromstring($imageData);
  $angle = 0;
  $rotate = imagerotate($source, $angle, 0); // if want to rotate the image
  $imageName = "sign/".$json->cons_no."sign.jpg";
  $url="http://mysoftway.com/readingmaster/dist/".$imageName;
  $imageSave = imagejpeg($rotate,$imageName,100);
  imagedestroy($source);

  echo insert_table("bill_reciept","`cons_no`, `cons_name`, `Remark`, `sign_url`,`id`, `bIsactive`, `mobile_no`",
    "
    '".SanitizeForSQL($json->cons_no)."',
    '".SanitizeForSQL($json->name)."',
    '".SanitizeForSQL($json->remark)."',
    '".$url."',
    '".SanitizeForSQL($json->id)."',
     1,
     '".SanitizeForSQL($json->mobile)."'
  ");

}






//==========================================================================================================================
?>
