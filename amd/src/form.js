// This file is part of the Zoom plugin for Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Populates or de-populates password field based on whether the
 * password is required or not.
 *
 * @package    mod_zoom
 * @copyright  2018 UC Regents
 * @author     Kubilay Agi
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define(['jquery'], function($) {
    return {
        init: function() {
            var option_jbh = $('input[name="option_jbh"][type!="hidden"]');
            var option_waiting_room = $('input[name="option_waiting_room"][type!="hidden"]');
            option_jbh.change(function() {
                if (option_jbh.is(':checked') == true) {
                    option_waiting_room.prop('checked', false);
                }
            });
            option_waiting_room.change(function() {
                if (option_waiting_room.is(':checked') == true) {
                    option_jbh.prop('checked', false);
                }
            });

            $('.repeat_interval').hide();
            var repeat_select = $('select[name="recurrence_type"]');
            if (repeat_select.val() > 0) {
                if (repeat_select.val() == 1) {
                    $('#interval_daily').show();
                } else if (repeat_select.val() == 2) {
                    $('#interval_weekly').show();
                } else if (repeat_select.val() == 3) {
                    $('#interval_monthly').show();
                }
            }
            repeat_select.change(function() {
                $('.repeat_interval').hide();
                if (this.value == 1) {
                    $('#interval_daily').show();
                } else if (this.value == 2) {
                    $('#interval_weekly').show();
                } else if (this.value == 3) {
                    $('#interval_monthly').show();
                }
            });
        }
    };
});
