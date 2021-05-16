<div class="box box-solid">
        <div class="box-header with-border">
            <i class="fa fa-text-width"></i>
            <h3 class="box-title">
                Total Order Value of US${{$order->total/100}},
                Order No. {{$order->id}}
                From {{$order->user->email}}
            </h3>
        </div>
        <br>

        <div class="container">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="mt-3">Bill To:</h4>
                <div>
                     <div>
                       {{$billto->company_name?? ''}}
                    </div>
                    <div>
                    {{ $billto->address }}, {{ $billto->city }}, {{ $billto->state }}, {{ $billto->zip_code }}, {{ $billto->country }}
                    </div>
                    <div>
                    {{ $billto->name }}
                    </div>
                    <div>{{ $billto->phone }}</div> 
                </div>
            </div>
            @if($consignee) 
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h4 class="mt-3">Ship to:</h4>
               <div>
                    <div>
                        {{ $consignee->company_name?? '' }}
                    </div>
                    {{ $consignee->address }}, {{ $consignee->city }}, {{ $consignee->state }}, {{ $consignee->zip_code }}, {{ $consignee->country }}
                    <div>{{ $consignee->name }}</div>
                    <div>{{ $consignee->phone }}</div> 
               </div>
            </div>
            @endif
        </div>

        <div class="container mt-4">
            <strong>Order Reference ID: </strong> 
            <small>{{$order->transaction_id}}</small>
            <table class="table">
                <tr style="font-weight: bold">
                    <td>Item</td>
                    <td>HS Code</td>
                    <td>Qty</td>
                    <td align="right">
                        Price
                    </td>
                </tr>
                @foreach($goods as $good)
                <tr>
                    <td>{{$good->product->name}}{{ $good->title }}</td>
                    <td>{{$good->product->hs_code}}</td>
                    <td>{{ $good->pivot->quantity }}</td>
                    <td align="right">
                       US$ {{$good->pivot->price * $good->pivot->quantity/100}} 
                    </td>
                </tr>
                @endforeach

                <tr class="font-weight-bold" >
                    <td>
                        Total
                    </td>
                    <td>
                    {{$cbm}}m3,
                    {{$weight}}kgs
                    </td>
                    <td align="right">
                    US$ {{$value}}
                    </td>
                </tr>

                
            </table>
        </div>
</div>