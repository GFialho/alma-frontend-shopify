# Alma Product Section

A custom product section for Alma supplements with subscription functionality, matching the design from the Ritmo Noturno product page.

## Features

- ✅ Clean, modern product layout
- ⭐ Star ratings with review count display
- 💰 Price display with sold-out badge support
- 📦 Subscription options (One-time purchase vs Subscription with 20% discount)
- 🔢 Quantity selector (hidden when subscription is selected)
- 🛒 Add to cart button
- 🎖️ Customizable trust badges (up to 6)
- 📋 Collapsible tabs for descriptions and usage instructions

## How to Use

### 1. Add to Theme Customizer

1. Go to **Shopify Admin → Online Store → Themes**
2. Click **Customize** on your active theme
3. Navigate to a product page
4. Click **Add section**
5. Select **Alma Product** from the list

### 2. Configure Blocks

The section comes with several blocks you can add and configure:

#### Title Block
Displays the product title (automatically pulled from product data).

#### Subtitle Block
Shows a tagline or product benefit statement.
- **Settings:** Rich text field for custom subtitle

#### Rating Block
Displays product rating stars and review count.
- **Note:** Requires product metafields: `product.metafields.reviews.rating.value` and `product.metafields.reviews.rating_count`

#### Price Block
Shows product price with sold-out badge when applicable.

#### Subscription Selector Block
Displays two purchase options:
- **Compra Única:** Standard one-time purchase
- **Assinatura:** Monthly subscription with 20% discount
- Automatically adjusts price display
- Hides quantity selector when subscription is selected

#### Variant Picker Block
Standard Shopify variant selector.
- **Settings:** Choose between dropdown or button style

#### Quantity Selector Block
Number input with +/- buttons for quantity selection.
- Automatically hidden when subscription option is selected

#### Buy Buttons Block
Add to cart button that:
- Shows "ADICIONAR AO CARRINHO" when available
- Shows "ESGOTADO" when sold out
- Includes loading state

#### Trust Badges Block
Grid of trust/security badges.
- **Settings:** Customize up to 6 badges with text like:
  - 🔒 Pagamento 100% Seguro
  - 🚚 Frete Grátis Brasil
  - ✅ 60 Dias de Garantia
  - 🇧🇷 Produzido no Brasil
  - 🧪 Fórmula Cientificamente Testada
  - 🌿 100% Natural

#### Collapsible Tab Block
Expandable accordion sections for content.
- **Settings:**
  - Heading text
  - Rich text content or link to a page
- **Common uses:** Product description, usage instructions, ingredients, FAQs

#### Custom Liquid Block
For advanced customizations using Liquid code.

## Section Settings

### Sticky Info
- **Enable Sticky Product Info:** Keeps product information visible while scrolling
- Default: Enabled

### Color Scheme
Select the color scheme for the section background.

### Padding
- **Padding Top:** 0-100px (default: 36px)
- **Padding Bottom:** 0-100px (default: 36px)

## Subscription Functionality

The subscription selector automatically:
1. Calculates 20% discount (subscription price = 80% of original)
2. Updates price display when toggled
3. Stores subscription type as a cart property: `properties[_subscription_type]`
4. Forces quantity to 1 when subscription is selected
5. Shows a confirmation message explaining the subscription

### Cart Properties
When a product is added to cart with subscription selected, it includes:
- `properties[_subscription_type]: "subscription"` or `"onetime"`

You can use this property to:
- Display subscription info in cart
- Route to subscription app (Recharge, Appstle, etc.)
- Show different messaging in checkout

## Default Block Order

When you add the section using the preset, blocks appear in this order:
1. Title
2. Subtitle
3. Rating
4. Price
5. Subscription Selector
6. Variant Picker
7. Quantity Selector
8. Buy Buttons
9. Trust Badges
10. Collapsible Tab (Descrição)
11. Collapsible Tab (Como Usar)

You can reorder, remove, or add additional blocks as needed.

## Styling

The section uses custom CSS from `/assets/section-alma-product.css` which includes:
- Responsive grid layout
- Subscription option cards with hover effects
- Custom quantity selector styling
- Trust badge grid
- Collapsible accordion styling
- Mobile-responsive design

## Product Metafields Required

For full functionality, products should have:
- `product.metafields.reviews.rating.value` - Rating value object
- `product.metafields.reviews.rating_count` - Number of reviews

These metafields power the star rating display. If not present, the rating block simply won't display.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Notes

- The section automatically handles sold-out states
- Quantity selector is hidden when subscription is active
- Price updates dynamically based on subscription selection
- All text is editable through the theme customizer
- Uses existing Shopify product data structure
- Compatible with Shopify 2.0 themes

## Troubleshooting

### Rating not showing
Ensure your product has the required review metafields set.

### Subscription price incorrect
Check that the subscription calculation (0.8 multiplier) matches your desired discount. Adjust in the section code if needed.

### Quantity selector not hiding
Make sure JavaScript is enabled and check browser console for errors.

### Styling issues
Verify that `section-alma-product.css` is properly loaded. Check network tab in browser dev tools.

