# Alma Product Section

A clean product section that matches Shopify's default style with added subscription functionality.

## What's Included

### Layout (matching your image):
- ✅ Vendor name (e.g., "MINHA LOJA")
- ✅ Product title
- ✅ Price display with sold-out badge
- ✅ **Subscription selector** (Compra Única / Assinatura with 20% discount)
- ✅ Quantity selector
- ✅ Add to cart button (shows "ESGOTADO" when sold out)
- ✅ Share button ("Compartilhar")
- ✅ "Ver informações completas" link
- ✅ Collapsible tabs for additional content

## How to Add to Your Store

1. **Add the section:**
   - Go to Shopify Admin → Online Store → Themes → Customize
   - Navigate to a product page
   - Click "Add section"
   - Select **"Alma Product"**

2. **Configure blocks:**
   - The section comes pre-configured with all necessary blocks
   - You can add/remove/reorder blocks as needed

## Subscription Feature

### How it works:
1. **Two purchase options:**
   - **Compra Única:** Standard one-time purchase at full price
   - **Assinatura:** Monthly subscription with 20% automatic discount

2. **Behavior:**
   - When "Assinatura" is selected:
     - Price updates to show 20% discount
     - Quantity selector is hidden (fixed to 1 unit)
     - Shows message: "✓ Você receberá 1 frasco todo mês automaticamente com 20% de desconto"
   
3. **Cart properties:**
   - The selection is stored as: `properties[_subscription_type]`
   - Value is either `"onetime"` or `"subscription"`
   - Use this to integrate with subscription apps (Recharge, Appstle, etc.)

## Available Blocks

- **Vendor** - Store/brand name
- **Title** - Product title
- **Price** - Product price with badges
- **Subscription Options** - One-time vs Subscription selector
- **Quantity Selector** - +/- quantity input
- **Buy Buttons** - Add to cart button
- **Share** - Social sharing button
- **Collapsible Tab** - Expandable content sections
- **Custom Liquid** - For custom code

## Styling

The section uses minimal custom styling to maintain Shopify's default look:
- Clean, professional layout
- Responsive design (mobile, tablet, desktop)
- Matches default Shopify product section aesthetics
- Added subscription selector with smooth transitions

## Files Created

1. `/sections/alma-product.liquid` - Section template
2. `/assets/section-alma-product.css` - Section styles

## Customization

### Change discount percentage:
In the section file, find:
```liquid
{{ product.selected_or_first_available_variant.price | times: 0.8 | money }}
```
Change `0.8` to your desired multiplier (0.8 = 20% off, 0.9 = 10% off, etc.)

### Modify subscription message:
In the section file, find the subscription message text and edit as needed.

## Troubleshooting

**Q: Subscription option not showing price correctly**
A: Make sure your product has a valid price set

**Q: Quantity selector not hiding with subscription**
A: Check browser console for JavaScript errors

**Q: Section looks different than expected**
A: Clear browser cache and ensure CSS file is loaded

## Support

This section is fully compatible with Shopify 2.0 themes and follows Shopify's section schema best practices.

