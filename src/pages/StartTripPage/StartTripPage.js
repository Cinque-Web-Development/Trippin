import React from 'react';
import './StartTripPage.css';

export default function StartTripPage({city}) {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, options);
      });

    return (
        <form>
            <div class="row">
                <div class="input-field col s6">
                    <input value={city} id="trip-name" type="text" class="validate"></input>
                    <label class="active" for="trip-name">First Name</label>
                </div>
            </div>
            <input type="text" class="datepicker"></input>
            <input type="text" class="datepicker"></input>
        </form>
    )
}
