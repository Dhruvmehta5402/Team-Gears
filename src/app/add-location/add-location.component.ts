import { Component } from '@angular/core';
@Component({

 selector: 'app-add-location',
 providers: [],
template:
<div>
  <h1>New Event</h1>
  <form  action = "info.php" method = "post">
         <label for="name">Name</label><br />
      <input type="text" name="name"  />
      <label for="address">Address</label><br />
       <input type="text" name="address" />
         <label for="purpose">Purpose</label><br />
      <textarea name="purpose" cols="30" rows="5" ></textarea>
    <button  type="submit" >Submit</button>
  </form>
</div>
,
directives: []
})

export class AddLocationComponent  {
  constructor() {
this.name = 'Angular'
}
}

