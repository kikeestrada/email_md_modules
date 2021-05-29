# Switch Image
Copy and Paste this HTML Component

## HTML
```html
<table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="100%">
	<tbody>
		<tr>
			<td style="font-size: 0px; line-height: 0px;">
				<img class="hide-element-mobile" src="img/img2.jpg" width="100%" alt="" style="display:block;width:100%; border: none;">
				<!--[if !mso]><!--> 
					<img class="show-element-mobile" src="img/img3.jpg" width="100%" height="auto" alt="" style="display:none;width:100%; height: auto; border: none;">
				<!--<![endif]-->
			</td>
		</tr>
	</tbody>
</table>
```

## CSS
```css
/*Hide*/
*[class=hide-element-mobile]{display:none!important;}
.hide-element-mobile{display:none!important;}

/*Show*/
*[class=show-element-mobile]{display:block!important;}
.show-element-mobile{display:block!important;}

```
