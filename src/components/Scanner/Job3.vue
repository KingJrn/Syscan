<template>
  <form>
    <div class="d-flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          SSH
        </label>
      </div>
      <div class="form-check ms-4">
        <label class="form-check-label" for="flexRadioDefault2">
          WinRM
        </label>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-12">
        <div class="form-group">
          <label class="col-form-label">select your credentials :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="form-group">
          <label class="col-form-label">Enter optional port access:</label>
          <input type="number" class="form-control" id="name1" placeholder="password" required />
        </div>
      </div>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Disable Sudo
      </label>
    </div>
  </form>
</template>