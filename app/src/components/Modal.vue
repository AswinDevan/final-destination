<template>
<div>
    <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
          <button slot="header" type="button" class="close" style="margin-left:90%" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
         <slot></slot>
      </div>
      <div class="modal-footer">
         <slot name="footer"></slot>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
    name:'modalComp',
}
</script>