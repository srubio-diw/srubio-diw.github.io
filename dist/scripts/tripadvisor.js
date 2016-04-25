if (window.taValidate == undefined) {
   window.taOnLoad   = window.onload;
   window.taValList  = Array();
   window.taValIndex = 0;
   window.taValidate = function () {
      if (window.taOnLoad != null) {
         try {
         window.taOnLoad();
         } catch (err) { }
      }
      for (ii = 0; ii < window.taValIndex; ii=ii+1) {
         fname = window.taValList[ii]
         fname();
      }
   }
   window.taAddValidator = function (fname) {
      window.taValList[window.taValIndex] = fname;
      window.taValIndex                   = window.taValIndex + 1;
      }
   window.onload = window.taValidate
}
window.taAddValidator (injectcdswritereviewlg8167)
  
// Returns true if we find a homepage link. Also, nofollows it if the homepage link in the embed code is nofollowed.
function checkHomePageLink(link, isHomePageLinkNoFollow) {
  var href = link.getAttribute('href');
  if (href) {
    var hrefsplit = href.split("/");
    // Check for homepage link - if http(s)://tripadvisor.com or http(s)://tripadvisor.com/
    // Now if we didn't find a nofollowed home page link in the embed code, we should not add a nofollow
    // on the home page link in the rendered code.
    if (hrefsplit.length == 3 || (hrefsplit.length == 4 && hrefsplit[3] == "")) {
      if (isHomePageLinkNoFollow) {
        link.setAttribute('rel', 'nofollow');
      }
      // Else, don't do anything. Also, we have handled the link so we don't need to check alt/anchor text for this
      return true;
    }
  }
  return false;
}

function injectcdswritereviewlg8167() {
    var container = document.getElementById('TA_cdswritereviewlg550');
  if (container == null) {
        var scriptTags = document.getElementsByTagName("script");
    for (var i=0; i<scriptTags.length; i++)
    {
      if (scriptTags[i] != null && scriptTags[i].src != null &&
          scriptTags[i].src.indexOf("cdswritereviewlg?uniq=550") >= 0)
      {
        var msgElem = document.createElement('div');
        if (msgElem != null && msgElem != 'undefined')
        {
          msgElem.style.margin='8px';
          msgElem.style.color='red';
          msgElem.innerHTML="Verifica el c&#243;digo de TripAdvisor y vuelve a instalarlo.";
          var parentElem = scriptTags[i].parentNode;
          if (parentElem != null && parentElem != 'undefined')
          {
            parentElem.appendChild(msgElem);
          }
          break;
        }
      }
    }
    return;
  }

  // The following block of code takes care of gathering information from the embed code about whether we should follow
  // or nofollow a link in the rendered code. If the user wants to nofollow links to tripadvisor, we should respect that
  // The logic is as follows - if we find the same link in the embed and rendered code, they both should have the same
  // nofollow status. If we find a link in the rendered code which is not present in the embedded code, we should
  // nofollow it. The home page link is an exception to this rule where homepage link should always be followed unless
  // the user explicitely nofollows it.
  // Two links are same in embed and rendered code if - the anchor text matches for text link and the alt text matches
  // for image links. Two image links with no alt text are considered same as well. If we find multiple links with
  // same anchor text or same alt text in the embed code, only one of them have nofollow, adds nofollow to all the
  // corresponding links in the rendered code. For more information please check https://jira.tripadvisor.com/browse/SEO-1902

  var imageStatus = {};
  var linkStatus = {};
  // Collect all the nofollow attributes for text and image links
  var links = container.getElementsByTagName('a');
  var isHomePageLinkNoFollow = false;
  if (links) {
    for (var i = 0; i < links.length; i++) {

      hasNoFollow = links[i].getAttribute('rel') && links[i].getAttribute('rel') == 'nofollow';

      // Special case for homepage link
      var href = links[i].getAttribute('href');

      // If we didn't find a nofollowed home page link already, keep looking for one. Do this check only if the
      // link in question has nofollow set on it
      if (hasNoFollow && href && !isHomePageLinkNoFollow) {
        if (href.indexOf('tripadvisor') > -1) {
          var hrefsplit = href.split("/");
          // Check if it's actually a homepage link - if http(s)://tripadvisor.com or http(s)://tripadvisor.com/
          // and set the nofollow status of that link. Note we are interested in the case where home page link
          // is nofollowed
          if (hrefsplit.length == 3 || (hrefsplit.length == 4 && hrefsplit[3] == "")) {
            isHomePageLinkNoFollow = hasNoFollow;
            continue;
          }
        }
      }

      // Check if it's an image link. If it is, use the alt attribute as the key in the map.
      var images = links[i].getElementsByTagName("img");
      if (images && images.length > 0) {
        // Check if it's an image link
        if (images[0].getAttribute('alt')) {
          imageStatus[images[0].getAttribute('alt').trim()] = hasNoFollow;
        }
        // No alt attribute case
        else {
          // This is to handle multiple links in the embed code without alt text. In this case if at least one link has
          // nofollow, we nofollow all the no alt text links in the rendered code
          if (! imageStatus[""]) {
            imageStatus[""] = hasNoFollow;
          }
        }
      }
      // If not use the anchor text.
      else if(links[i].text) {
        var anchorText = links[i].text;
        if (!anchorText in linkStatus || !linkStatus[anchorText]) {
          linkStatus[anchorText] = hasNoFollow;
        }
      }
    }
  }

  
  var holderElement = document.createElement('div');
  holderElement.innerHTML = '<div id="CDSWIDWRL" class="widWRL"> '+
'<div class="widWRLData" style="border: #589442 1px solid;"> '+
'<div class="widWRLBranding"> '+
'<dl> '+
'<dt> '+
'<a target="_blank" href="https://www.tripadvisor.es/"><img src="images/tripadvisor/medium-logo-12097-2.png" alt="TripAdvisor"/></a> '+
'</dt> '+
'<dt class="messaging">Reserva tu mejor viaje, cada vez que viajes</dt> </dl> '+
'</div> '+
'<div class="widWRLLink"> '+
'<a target=_blank href="https://www.tripadvisor.es/Hotel_Review-g1078807-d2602374-Reviews-La_Marina_Camping_Resort-La_Marina_Costa_Blanca_Alicante_Province_Valencian_Country.html" onclick="ta.cds.handleTALink(12097,this);return true;">Opina sobre La Marina Camping & Resort</a> </div> '+
'<form action="https://www.tripadvisor.es/UserReview-g1078807-d2602374-La_Marina_Camping_Resort-La_Marina_Costa_Blanca_Alicante_Province_Valencian_Country.html" target="_blank" name="cdsWRLForm4951" id="cdsWRLForm4951" onsubmit="ta.cds.handleTALink(12097,this);return false;"> '+
'<input type="hidden" id="rating04951" value="(Haz clic para puntuar)"/> '+
'<input type="hidden" id="rating14951" value="P&#233;simo"/> '+
'<input type="hidden" id="rating24951" value="Malo"/> '+
'<input type="hidden" id="rating34951" value="Normal"/> '+
'<input type="hidden" id="rating44951" value="Muy bueno"/> '+
'<input type="hidden" id="rating54951" value="Excelente"/> '+
'<input type="hidden" id="defaultTitle4951" value="T&#237;tulo de tu opini&#243;n - Describe tu estancia en una frase o menos."/> '+
'<input type="hidden" id="reviewTitle4951" name="ReviewTitle"/> '+
'<div class="widWRLRating"> '+
'<input type="hidden" name="qid10" id="qid104951" value="0"/> '+
'<span class="widWRLRate g00" id="ratingSpan" onclick="return selectRating(this, event, true, 4951);" onmousemove="return selectRating(this, event, false, 4951);" onmouseout="return lastSetRating(this, 4951);"> '+
'<img src="images/tripadvisor/ratings-v3.png" id="ratingImg"/> '+
'</span> '+
'<span id="ratingText4951" class="widWRLRatingTextSmall">(Haz clic para puntuar) '+
'</span> '+
'</div> '+
'<div class="widWRLReview"> '+
'<textarea id="taWRLTitle4951" onFocus="initTextArea(this);" rows="3" cols="30" onkeypress="limitLength(this, 120);">T&#237;tulo de tu opini&#243;n - Describe tu estancia en una frase o menos.</textarea> '+
'</div> '+
'<div class="widWRLButton"> '+
'<input type="submit" id="taWRLContinue4951" name="taWRLContinue4951" value="Continuar" onclick="checkTextArea(4951);" style="background:url(images/tripadvisor/yellow-button.png) 0 0 repeat-x #EA9523;"/> </div> '+
'</form> '+
'</div> '+
'</div> '+
'';

  var links = holderElement.getElementsByTagName('a');
  if (links) {
    for (var i = 0; i < links.length; i++) {

      // Special case for homepage link. The function returns true if we find a homepage link. In that case, we don't
      // to apply other rules.
      if(checkHomePageLink(links[i], isHomePageLinkNoFollow)) {
        continue;
      }

      // Check if it's an image link
      var images = links[i].getElementsByTagName("img");
      if (images && images.length > 0) {
        // If the image has alt attribute
        if (images[0].getAttribute('alt')) {
          var key = images[0].getAttribute('alt').trim();
          if (! (key in imageStatus) || imageStatus[key]) {
            links[i].setAttribute('rel', 'nofollow');
          }
        }
        // No alt attribute case. The no follow status for those are stored under "". If no alt attribute links in
        // embed code don't exist, we should nofollow any no alt attribute links in the rendered code. Unless it's a
        // homepage but we handled that above. I haven't seen any no alt non-homepage image link in the rendered code
        // so this is just a safeguard
        else {
          if(! ("" in imageStatus) || imageStatus[""]) {
            links[i].setAttribute('rel', 'nofollow');
          }
        }
      }
      else {
        if (links[i].text) {
          var key = links[i].text.trim();
          if (! (key in linkStatus) || linkStatus[key]) {
            links[i].setAttribute('rel', 'nofollow');
          }
        }
      }
    }

    widgetHtml = holderElement.innerHTML;
  }
  else {
    var widgetHtml = '<div id="CDSWIDWRL" class="widWRL"> '+
'<div class="widWRLData" style="border: #589442 1px solid;"> '+
'<div class="widWRLBranding"> '+
'<dl> '+
'<dt> '+
'<a target="_blank" href="https://www.tripadvisor.es/"><img src="images/tripadvisor/medium-logo-12097-2.png" alt="TripAdvisor"/></a> '+
'</dt> '+
'<dt class="messaging">Reserva tu mejor viaje, cada vez que viajes</dt> </dl> '+
'</div> '+
'<div class="widWRLLink"> '+
'<a target=_blank href="https://www.tripadvisor.es/Hotel_Review-g1078807-d2602374-Reviews-La_Marina_Camping_Resort-La_Marina_Costa_Blanca_Alicante_Province_Valencian_Country.html" onclick="ta.cds.handleTALink(12097,this);return true;">Opina sobre La Marina Camping & Resort</a> </div> '+
'<form action="https://www.tripadvisor.es/UserReview-g1078807-d2602374-La_Marina_Camping_Resort-La_Marina_Costa_Blanca_Alicante_Province_Valencian_Country.html" target="_blank" name="cdsWRLForm4951" id="cdsWRLForm4951" onsubmit="ta.cds.handleTALink(12097,this);return false;"> '+
'<input type="hidden" id="rating04951" value="(Haz clic para puntuar)"/> '+
'<input type="hidden" id="rating14951" value="P&#233;simo"/> '+
'<input type="hidden" id="rating24951" value="Malo"/> '+
'<input type="hidden" id="rating34951" value="Normal"/> '+
'<input type="hidden" id="rating44951" value="Muy bueno"/> '+
'<input type="hidden" id="rating54951" value="Excelente"/> '+
'<input type="hidden" id="defaultTitle4951" value="T&#237;tulo de tu opini&#243;n - Describe tu estancia en una frase o menos."/> '+
'<input type="hidden" id="reviewTitle4951" name="ReviewTitle"/> '+
'<div class="widWRLRating"> '+
'<input type="hidden" name="qid10" id="qid104951" value="0"/> '+
'<span class="widWRLRate g00" id="ratingSpan" onclick="return selectRating(this, event, true, 4951);" onmousemove="return selectRating(this, event, false, 4951);" onmouseout="return lastSetRating(this, 4951);"> '+
'<img src="images/tripadvisor/ratings-v3.png" id="ratingImg"/> '+
'</span> '+
'<span id="ratingText4951" class="widWRLRatingTextSmall">(Haz clic para puntuar) '+
'</span> '+
'</div> '+
'<div class="widWRLReview"> '+
'<textarea id="taWRLTitle4951" onFocus="initTextArea(this);" rows="3" cols="30" onkeypress="limitLength(this, 120);">T&#237;tulo de tu opini&#243;n - Describe tu estancia en una frase o menos.</textarea> '+
'</div> '+
'<div class="widWRLButton"> '+
'<input type="submit" id="taWRLContinue4951" name="taWRLContinue4951" value="Continuar" onclick="checkTextArea(4951);" style="background:url(images/tripadvisor/yellow-button.png) 0 0 repeat-x #EA9523;"/> </div> '+
'</form> '+
'</div> '+
'</div> '+
'';
  }

    if (widgetHtml.indexOf("WIDGET_ERR_LINKS") != -1) {
    var linksDiv = document.createElement('div');

    var links = container.getElementsByTagName("a");
    if (links) {
      for (var i=0; i<links.length; ++i) {
                if (links[i].getElementsByTagName("img").length > 0) {
          if (widgetHtml.indexOf("WIDGET_ERR_IMAGE_LINK")) {
            widgetHtml = widgetHtml.replace('<a id="WIDGET_ERR_IMAGE_LINK" href="http://www.tripadvisor.com/" target="_blank">' ,'<a href="' + links[i] + '" target="_blank">');
            widgetHtml = widgetHtml.replace('Reviews of Hotels, Flights and Vacation Rentals', links[i].getElementsByTagName("img")[0].alt);
          }
        }
        else {
          linkDiv = document.createElement('div');
          links[i].setAttribute('target', '_blank');
          linkDiv.appendChild(links[i].cloneNode(true));
          if (linksDiv.getElementsByTagName("div").length == 0) {
            linkDiv.style.margin="8px 0 0 0";
          }
          linksDiv.appendChild(linkDiv);
        }
      }
            var cdsWidgetKey = 'cdswritereviewlg';
      if (linksDiv.hasChildNodes() && (cdsWidgetKey != "cdshac")) {
        linksDiv.insertBefore(document.createTextNode("Lee más en TripAdvisor:"), linksDiv.firstChild);       } 
    }

    widgetHtml = widgetHtml.replace('<div id="WIDGET_ERR_LINKS"></div>', linksDiv.innerHTML);
  }

  
  container.innerHTML = widgetHtml; 
}