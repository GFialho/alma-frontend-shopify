# Quick Setup Guide - Shopify Subscriptions Integration

## ✅ What Was Completed

The Alma product custom page has been fully integrated with Shopify Subscriptions App. Here's what was implemented:

### 1. Core Integration
- ✅ Native Shopify selling plans support
- ✅ App block support for Shopify Subscriptions App widget
- ✅ Variant picker for products with multiple options
- ✅ Subscription vs one-time purchase selector
- ✅ Proper form submission with selling plan data

### 2. Files Modified
- ✅ `/sections/alma-product.liquid` - Main section with subscription support
- ✅ `/snippets/buy-buttons.liquid` - Updated to support selling plans
- ✅ `/assets/section-alma-product.css` - Already has subscription styling

### 3. Features
- ✅ Automatic subscription detection (only shows if product has selling plans)
- ✅ Dynamic pricing display with discounts
- ✅ Automatic savings badge calculation
- ✅ Quantity locked to 1 for subscriptions
- ✅ Subscription details shown in cart and orders
- ✅ URL parameters updated for sharing subscription selections

## 🚀 Next Steps - What You Need to Do

### Step 1: Install/Verify Shopify Subscriptions App

1. Go to your Shopify Admin
2. Navigate to **Apps** → **Shopify App Store**
3. Search for **"Shopify Subscriptions"** (by Shopify)
4. Install if not already installed (it's free)

### Step 2: Create a Selling Plan

1. Go to **Apps** → **Subscriptions**
2. Click **"Create subscription plan"** or **"Create selling plan"**
3. Configure your plan:
   ```
   Name: Monthly Subscription (or your preference)
   Delivery frequency: Every 1 month
   Discount type: Percentage
   Discount amount: 20% (or your preference)
   ```
4. Click **Save**

### Step 3: Add Products to the Selling Plan

1. In the Subscriptions app, find your selling plan
2. Click **"Add products"** or **"Manage products"**
3. Search and add your Alma products (e.g., "Ritmo Noturno")
4. Click **Save**

**OR** from the Product page:
1. Go to **Products** → Select your product
2. Scroll to **"Selling plans"** section
3. Click **"Add selling plan"**
4. Select your subscription plan
5. Click **Save**

### Step 4: Test the Integration

1. Go to your online store
2. Navigate to a product with subscriptions enabled
3. You should see:
   - Two options: "Compra Única" and "Assinatura" (or your subscription name)
   - Subscription shows discounted price
   - Savings badge displays automatically
4. Select subscription and add to cart
5. Check cart - should show subscription details
6. Complete a test order to verify everything works

### Step 5: Add Alma Product Section to Your Templates

If you want to use the Alma product section on specific products:

1. Go to **Online Store** → **Themes** → **Customize**
2. Navigate to the product you want to customize
3. Add a new section → Select **"Alma Product"**
4. Configure the blocks in this order:
   - Title
   - Price
   - Variant Picker (if product has variants)
   - Subscription Selector
   - Quantity Selector
   - Buy Buttons
   - (Any other blocks you want)
5. Click **Save**

## 🎨 Customization Options

### Change Subscription Message
Edit `/sections/alma-product.liquid` line 139:
```liquid
<div class="alma-subscription-message" id="subscription-message-{{ section.id }}" style="display: none;">
  ✓ Your custom message here
</div>
```

### Change Subscription Button Colors
Edit `/assets/section-alma-product.css` lines 80-83:
```css
.alma-subscription-option.active {
  border-color: #your-color-here;
  background: #your-background-here;
}
```

### Change Badge Color
Edit `/assets/section-alma-product.css` line 113:
```css
background: #7e9278; /* Change to your preferred color */
```

## 🔍 Troubleshooting

### "Subscription selector not showing"
- Make sure the product has selling plans assigned in Shopify Admin
- Check that selling plans are active
- Verify you're using the Alma Product section (not main-product)

### "Wrong price showing"
- Check your selling plan discount percentage in Subscriptions app
- Verify the product price is correct
- Clear browser cache and test again

### "Form not submitting"
- Check browser console for JavaScript errors
- Verify the selling_plan input exists in the form
- Test with browser dev tools to inspect form data

### "Cart not showing subscription"
- This integration is 100% compatible with Shopify's native subscriptions
- Cart will automatically show subscription details
- If not showing, check Shopify's Subscriptions app is properly installed

## 📚 Additional Documentation

For more detailed technical information, see:
- `SHOPIFY_SUBSCRIPTIONS_INTEGRATION.md` - Complete technical documentation
- Shopify's official docs: https://help.shopify.com/en/manual/products/purchase-options/subscriptions

## ✨ You're All Set!

The integration is complete and ready to use. Just follow the steps above to set up your selling plans in Shopify Admin, and your customers will be able to subscribe to your products!

If you have any questions or issues, refer to the troubleshooting section or the technical documentation.

