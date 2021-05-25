//<![CDATA[
$('#nomorAdmin').val('0813-8626-7897');
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		$('#whatsapp .kirim').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .nama').val() == '') {
				ph = $('#whatsapp .nama').attr('placeholder');
				alert(ph + ' Mohon disertakan');
				$('#whatsapp .nama').focus();
				return false;
            } else if ($('#whatsapp .tanya').val() == '') {
                ph = $('#whatsapp .tanya').attr('placeholder');
                alert('Silahkan cantumkan ' + ph + ' anda');
                $('#whatsapp .tanya').focus();
				return false;
			    } else {
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				var tujuan = $('#whatsapp .pertanyaan').val(),
                    d = new Date(),
					via_url = location.href,
		            nama = $('#whatsapp .nama').val(),
		            tanya = $('#whatsapp .tanya').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +

               'Hallo kak, nama saya %2A' + nama + '%2A mau tanya produk ini.%0A' +
               'Saya lihat di ' + via_url + '%0A' +
               ' %0A%2APertanyaan Saya%2A:%20' + tanya + '%0A' );
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}//]]>
