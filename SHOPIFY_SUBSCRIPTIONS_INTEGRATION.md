# Shopify Subscriptions App Integration - Alma Product Page

## Overview
This document explains the integration of Shopify Subscriptions App with the Alma custom product page (`alma-product.liquid`). The integration allows customers to choose between one-time purchases and subscription options directly from the product page.

## Features Implemented

### 1. Native Shopify Selling Plans Support
- ✅ The alma-product section now supports Shopify's native selling plans
- ✅ Automatically detects and displays subscription options when selling plans are configured
- ✅ Integrates seamlessly with Shopify Subscriptions App

### 2. App Block Support
- ✅ Added `@app` block type support to allow Shopify apps (including Subscriptions App) to inject their widgets
- ✅ Widgets from the Shopify Subscriptions App can now be placed anywhere in the product page layout

### 3. Subscription Selector
- ✅ Custom UI for subscription vs one-time purchase selection
- ✅ Automatically pulls pricing and discount information from selling plans
- ✅ Displays subscription frequency (e.g., monthly, weekly)
- ✅ Shows discount percentages automatically

### 4. Variant Picker Integration
- ✅ Added variant picker support to allow customers to select product variants
- ✅ Subscription selection is maintained when switching variants
- ✅ All necessary CSS files are loaded dynamically

### 5. Form Integration
- ✅ Product form properly sends `selling_plan` parameter to Shopify
- ✅ Cart correctly shows subscription items with their selling plans
- ✅ Compatible with Shopify's cart and checkout flow

## How to Use

### Setting Up Subscriptions in Shopify Admin

1. **Install Shopify Subscriptions App** (if not already installed):
   - Go to Shopify Admin → Apps → Shopify App Store
   - Search for "Shopify Subscriptions"
   - Install the app

2. **Create a Selling Plan**:
   - Go to Shopify Admin → Apps → Subscriptions
   - Click "Create subscription plan"
   - Configure:
     - Name (e.g., "Monthly Subscription")
     - Frequency (e.g., every 1 month)
     - Discount (e.g., 20% off)
   - Save the plan

3. **Add Products to the Selling Plan**:
   - In the Subscriptions app, add your products to the selling plan
   - Or from Product page → Selling plans section

### Using the Alma Product Section

1. **Add Alma Product Section to a Template**:
   - Go to Shopify Admin → Online Store → Themes → Customize
   - Choose a product template or create a new one
   - Add the "Alma Product" section

2. **Configure Blocks**:
   The section supports these blocks (in order):
   - `@app` - Shopify app widgets (including Subscriptions)
   - Vendor
   - Title
   - Price
   - Variant Picker (for products with multiple variants)
   - Subscription Selector (displays subscription options)
   - Quantity Selector
   - Buy Buttons
   - Share
   - Collapsible Tab
   - Custom Liquid

3. **Subscription Selector Block**:
   - The subscription selector automatically appears when the product has selling plans
   - It displays:
     - One-time purchase option with regular price
     - Subscription option with discounted price and frequency
     - Savings badge (e.g., "Save 20%")
   - When a customer selects subscription:
     - Quantity is locked to 1
     - A message explains the subscription terms
     - The selling plan ID is added to the cart

## Technical Details

### Files Modified

1. **`/sections/alma-product.liquid`**:
   - Added `@app` block support
   - Added variant picker integration
   - Updated subscription selector to use native selling plans
   - Modified product form to include `selling_plan` parameter
   - Enhanced JavaScript to handle selling plan selection

2. **`/snippets/buy-buttons.liquid`**:
   - Updated to support `selling_plan` parameter
   - Changed from custom property to native Shopify selling plan field

### Key Code Changes

#### Selling Plan Detection
```liquid
{%- if current_product.selling_plan_groups.size > 0 -%}
  {%- assign first_selling_plan_group = current_product.selling_plan_groups.first -%}
  {%- assign first_selling_plan = first_selling_plan_group.selling_plans.first -%}
  <!-- Display subscription options -->
{%- endif -%}
```

#### Form Parameter
```liquid
<input type="hidden" id="selling-plan-input-{{ section.id }}" name="selling_plan" value="">
```

#### JavaScript Function
```javascript
function almaToggleSubscription(type, sellingPlanId, sectionId) {
  // Updates form with selling plan ID
  // Manages UI state (quantity, messages)
  // Updates URL parameters
}
```

### Subscription Pricing Calculation

The subscription price is calculated using Shopify's native price adjustments:
```liquid
{%- assign subscription_price = current_product.selected_or_first_available_variant.price 
    | times: selling_plan.price_adjustments.first.value 
    | divided_by: 100.0 -%}
```

## Cart and Checkout

When a customer adds a subscription to cart:

1. **Cart Display**:
   - Shows `selling_plan_allocation.selling_plan.name` (e.g., "Deliver every month")
   - Already implemented in `/sections/main-cart-items.liquid`
   - Already implemented in `/sections/cart-notification-product.liquid`

2. **Order Display**:
   - Shows subscription details in order summary
   - Already implemented in `/sections/main-order.liquid`

3. **Checkout**:
   - Shopify automatically handles subscription checkout
   - Creates subscription in customer account
   - Charges customer according to the selling plan

## Testing the Integration

### 1. Test Without Selling Plans
- Product page should display normally
- Subscription selector should not appear
- Everything else works as one-time purchase

### 2. Test With Selling Plans
- Product page should show subscription selector
- Selecting subscription should:
  - Update UI to show subscription is selected
  - Hide quantity selector (subscriptions are quantity 1)
  - Show subscription message
  - Add selling plan to form
- Adding to cart should show subscription details in cart

### 3. Test Variant Changes
- Switch between variants
- Subscription selection should be maintained
- Selling plan should remain in form

### 4. Test Complete Purchase
- Complete checkout with subscription
- Verify subscription appears in customer account
- Verify first charge is processed

## Troubleshooting

### Subscription Selector Not Appearing
- Verify product has selling plans assigned
- Check in Shopify Admin → Products → [Product] → Selling plans
- Ensure selling plans are active

### Wrong Price Displayed
- Check selling plan price adjustment percentage
- Verify price calculation in subscription selector code
- Check browser console for JavaScript errors

### Form Submission Issues
- Verify `selling_plan` input is in the form
- Check that selling plan ID is being set correctly
- Inspect form data before submission

### Cart Not Showing Subscription
- Verify `selling_plan_allocation` code in cart liquid files
- Check that selling plan was actually added to cart item
- Review cart JSON response in browser dev tools

## Advanced Customization

### Styling the Subscription Selector
The subscription selector uses CSS classes defined in `/assets/section-alma-product.css`:
- `.alma-subscription-wrapper`
- `.alma-subscription-options`
- `.alma-subscription-option`
- `.alma-subscription-content`
- `.alma-subscription-title`
- `.alma-subscription-price`
- `.alma-subscription-badge`
- `.alma-subscription-message`

### Multiple Selling Plans
To support multiple subscription frequencies (e.g., weekly, monthly, yearly):
1. Update the `{%- for selling_plan in first_selling_plan_group.selling_plans limit: 1 -%}` loop
2. Remove or increase the `limit: 1`
3. Add more radio buttons for each selling plan option
4. Update JavaScript to handle multiple options

### Custom Subscription Messages
Update the subscription message in the liquid code:
```liquid
<div class="alma-subscription-message" id="subscription-message-{{ section.id }}" style="display: none;">
  ✓ Your custom message here
</div>
```

## Additional Resources

- [Shopify Subscriptions App Documentation](https://help.shopify.com/en/manual/products/purchase-options/subscriptions)
- [Selling Plans API](https://shopify.dev/docs/api/liquid/objects/selling_plan)
- [Subscription Contract API](https://shopify.dev/docs/api/admin-rest/2024-01/resources/subscriptioncontract)

## Support

For issues or questions about this integration:
1. Check this documentation first
2. Review Shopify's official Subscriptions documentation
3. Check browser console for JavaScript errors
4. Verify selling plans are configured correctly in Shopify Admin

