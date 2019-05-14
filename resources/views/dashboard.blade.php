@extends('app')

@section('content')

<div id="crud" class="row">
   <div class="col-xs-12">
      <h1 class="page-header"> CRUDO Laravel y VUEjs </h1>
   </div> <br>
   <div class="col-sm-10">
      <a href="#" class="btn btn-primary pull-right">Agregar</a>
      <table class="table table-hover table-sprite">
        <thead>
           <tr>
             <th>id</th>
             <th>Dato ingresado</th>
           <!--  <th>Puesto</th>  -->
              <th colspan="2">&nbsp;</th>
           </tr>
        </thead>
        <tbody>
           <tr v-for="keep in keeps">
             <td width="10px">@{{ keep.id }}</td>
             <td>@{{ keep.keep }}</td>
            <!-- <td>@{{ puesto.puesto }}</td>  -->
             <td width="10px">
             <a href="#" class="btn btn-warning btn-sm">Editar</a>
             </td>
             <td width="10px">
             <a href="#" class="btn btn-danger btn-sm">Eliminar</a>
             </td>
           </tr>
        </tbody>
      </table>
   </div>
   <div class="col-sm-5">
     <pre> 
     @{{ $data }}
     </pre>
   </div> 
</div>


@endsection