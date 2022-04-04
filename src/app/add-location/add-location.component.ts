import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  constructor(private diaglogRef: MatDialog) {}

  ngOnInit(): void {
  }

  onSubmit(login: any) {
    console.log("Form submitted", login);
    <?php
/* Attempt MySQL server connection*/
$link = mysqli_connect("localhost", "teamgears", "Gears2022", "mysql");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt insert query execution
$name =  $_POST['name'];
$address = $_POST['address'];
$purpose = $_POST['purpose'];
 
$sql = "INSERT INTO location  VALUES ('$name', '$address', '$purpose')";
//$sql = "INSERT INTO location  VALUES ('pr1', 'pr2', 'pr3')";

if(!empty($name) && !empty($address) &&!empty($purpose)) { 

if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
}
// Close connection
mysqli_close($link);
?>  
    alert("hiiii");
  }

  closeDialog() {
    this.diaglogRef.closeAll();

  }

  
  
}


