
(function ($) {

$(document).ready(function() {});

  var ref = Drupal.settings.basePath;
  
Drupal.behaviors.noticias = {

    attach: function (context) {
 	var ref = Drupal.settings.basePath;
	$(".filtro_fecha #select_anno").change(function() {
	    var data = {};
            // Add view settings to the data.
            for (var key in Drupal.settings.views.ajaxViews[0]) {
              data[key] = Drupal.settings.views.ajaxViews[0][key];
            }
            var $arg = (jQuery('#select_anno').val() != "null") ? jQuery('#select_anno').val() : "null";

            data['view_args'] =  ($arg != "null") ? $arg : "all";
            jQuery.ajax({
              url: ref+"?q=views/ajax",
              type: 'POST',
              data: data,
              dataType: 'json',
              success: function(response) {
                //alert(response[1].data);
		//response[1].data $(".view_empty", ).length);
		//alert(response[1].data.contains("No"));
		if ($(".view_empty", response[1].data).length){
			alert('esta');
		}
		var valor = jQuery('#select_anno').val();
                jQuery('.view-display-id-noticias_historico').html(response[1].data);
                Drupal.settings.views.ajaxViews[0]['view_args'] = data['view_args'];
                Drupal.behaviors.ViewsAjaxView.attach();
		Drupal.attachBehaviors('.filtro_fecha #select_anno');
		jQuery('#select_anno').val(valor);
                return;
              },
              error: function(xhr) {
                alert("Error");
              }
            });
	  
	  });



	  $(".filtro_fecha #select_mes").change(function() {
	    var data = {};
            // Add view settings to the data.
            for (var key in Drupal.settings.views.ajaxViews[0]) {
              data[key] = Drupal.settings.views.ajaxViews[0][key];
            }
            var $arg = (jQuery('#select_anno').val() != "null") ? jQuery('#select_anno').val() : "null";
            $arg += ($arg != "null") ? ((jQuery('#select_mes').val() != "null") ? "-" + jQuery('#select_mes').val() : "" ) : "null";
            //$arg += ($arg != "null") ? ((jQuery('#select_dia').val() != "null") ? "-" + jQuery('#select_dia').val() : "" ) : "null";

            data['view_args'] =  ($arg != "null") ? $arg : "all";
            jQuery.ajax({
              url: ref+"?q=views/ajax",
              type: 'POST',
              data: data,
              dataType: 'json',
              success: function(response) {
                //alert(response[1].data);
		//response[1].data $(".view_empty", ).length);
		//alert(response[1].data.contains("No"));
		if ($(".view_empty", response[1].data).length){
			alert('esta');
		}
		var valor = jQuery('#select_mes').val();
		var valor_anno = jQuery('#select_anno').val();
                jQuery('.view-display-id-noticias_historico').html(response[1].data);
                Drupal.settings.views.ajaxViews[0]['view_args'] = data['view_args'];
                Drupal.behaviors.ViewsAjaxView.attach();
		Drupal.attachBehaviors('.filtro_fecha #select_mes');
		jQuery('#select_mes').val(valor);
		jQuery('#select_anno').val(valor_anno);
                return;
              },
              error: function(xhr) {
                alert("Error");
              }
            });

	});


	//para los dias 
	$(".filtro_fecha #select_dia").change(function() {
	    var data = {};
            // Add view settings to the data.
            for (var key in Drupal.settings.views.ajaxViews[0]) {
              data[key] = Drupal.settings.views.ajaxViews[0][key];
            }
            var $arg = (jQuery('#select_anno').val() != "null") ? jQuery('#select_anno').val() : "null";
            $arg += ($arg != "null") ? ((jQuery('#select_mes').val() != "null") ? "-" + jQuery('#select_mes').val() : "" ) : "null";
            $arg += ($arg != "null") ? ((jQuery('#select_dia').val() != "null") ? "-" + jQuery('#select_dia').val() : "" ) : "null";

            data['view_args'] =  ($arg != "null") ? $arg : "all";
            jQuery.ajax({
              url: ref+"?q=views/ajax",
              type: 'POST',
              data: data,
              dataType: 'json',
              success: function(response) {
                //alert(response[1].data);
		//response[1].data $(".view_empty", ).length);
		//alert(response[1].data.contains("No"));
		if ($(".view_empty", response[1].data).length){
			alert('esta');
		}
		var valor = jQuery('#select_mes').val();
		var valor_anno = jQuery('#select_anno').val();
		var valor_dia = jQuery('#select_dia').val();
                jQuery('.view-display-id-noticias_historico').html(response[1].data);
                Drupal.settings.views.ajaxViews[0]['view_args'] = data['view_args'];
                Drupal.behaviors.ViewsAjaxView.attach();
		Drupal.attachBehaviors('.filtro_fecha #select_dia');
		jQuery('#select_mes').val(valor);
		jQuery('#select_anno').val(valor_anno);
		jQuery('#select_dia').val(valor_dia);
                return;
              },
              error: function(xhr) {
                alert("Error");
              }
            });
	});

                        
  }
}


 





})(jQuery); 
