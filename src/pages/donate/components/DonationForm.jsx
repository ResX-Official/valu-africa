import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const DonationForm = ({ selectedAmount, donationType, onDonationTypeChange }) => {
  const [formData, setFormData] = useState({
    amount: selectedAmount || 100,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    paymentMethod: 'card',
    currency: 'USD',
    isAnonymous: false,
    agreeToTerms: false,
    subscribeNewsletter: true,
    dedicationType: 'none',
    dedicationName: '',
    dedicationEmail: '',
    dedicationMessage: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const currencies = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'ZAR', label: 'South African Rand (R)' },
    { value: 'NGN', label: 'Nigerian Naira (₦)' },
    { value: 'KES', label: 'Kenyan Shilling (KSh)' },
    { value: 'GHS', label: 'Ghanaian Cedi (₵)' }
  ];

  const countries = [
    { value: 'US', label: 'United States' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'CA', label: 'Canada' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'KE', label: 'Kenya' },
    { value: 'GH', label: 'Ghana' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'EG', label: 'Egypt' },
    { value: 'MA', label: 'Morocco' }
  ];

  const paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card', icon: 'CreditCard' },
    { value: 'paypal', label: 'PayPal', icon: 'Wallet' },
    { value: 'bank', label: 'Bank Transfer', icon: 'Building2' },
    { value: 'mobile', label: 'Mobile Money', icon: 'Smartphone' }
  ];

  const bankAccounts = [
    {
      name: 'Valentine Unimuke Foundation',
      type: 'NGO Dollar Account',
      bank: 'First Bank',
      accountNumber: '2047168370',
      swiftCode: 'FBNINGLAXXX',
      currency: 'USD'
    },
    {
      name: 'Valentine Unimuke Foundation',
      type: 'NGO Naira Account',
      bank: 'First Bank',
      accountNumber: '2047136148',
      currency: 'NGN'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.country) newErrors.country = 'Country is required';
    if (!formData?.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';
    if (formData?.amount < 5) newErrors.amount = 'Minimum donation amount is $5';

    if (formData?.dedicationType !== 'none') {
      if (!formData?.dedicationName?.trim()) newErrors.dedicationName = 'Dedication name is required';
      if (formData?.dedicationType === 'notify' && !formData?.dedicationEmail?.trim()) {
        newErrors.dedicationEmail = 'Email is required for notification';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful donation
      alert(`Thank you for your ${donationType} donation of ${formData?.currency} ${formData?.amount}! Your contribution will make a real difference in African communities.`);
      
      // Reset form
      setFormData({
        ...formData,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dedicationName: '',
        dedicationEmail: '',
        dedicationMessage: ''
      });
      
    } catch (error) {
      alert('Payment processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Account details copied to clipboard!');
  };

  React.useEffect(() => {
    setFormData(prev => ({ ...prev, amount: selectedAmount || 100 }));
  }, [selectedAmount]);

  return (
    <div className="card-modern-component p-8">
      <div className="mb-8">
        <h3 className="text-3xl font-heading font-bold text-gradient-primary mb-3">
          Complete Your Donation
        </h3>
        <p className="text-gray-600 text-lg">
          Your generosity helps build stronger African communities through the Valentine Unimuke Foundation
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Donation Type */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Donation Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { value: 'one-time', label: 'One-time', icon: 'Zap' },
              { value: 'monthly', label: 'Monthly', icon: 'Calendar' },
              { value: 'campaign', label: 'Campaign', icon: 'Target' }
            ]?.map((type) => (
              <button
                key={type?.value}
                type="button"
                onClick={() => onDonationTypeChange(type?.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  donationType === type?.value
                    ? 'border-primary bg-gradient-primary text-white shadow-lg' 
                    : 'border-gray-200 hover:border-primary/50 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon name={type?.icon} size={20} />
                  <span className="font-semibold">{type?.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount and Currency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Donation Amount"
            type="number"
            value={formData?.amount}
            onChange={(e) => handleInputChange('amount', parseFloat(e?.target?.value) || 0)}
            error={errors?.amount}
            required
            min="5"
          />
          <Select
            label="Currency"
            options={currencies}
            value={formData?.currency}
            onChange={(value) => handleInputChange('currency', value)}
          />
        </div>

        {/* Personal Information */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Personal Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              type="text"
              value={formData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              error={errors?.firstName}
              required
            />
            <Input
              label="Last Name"
              type="text"
              value={formData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              error={errors?.lastName}
              required
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            description="We'll send you a donation receipt and impact updates"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Phone Number (Optional)"
              type="tel"
              value={formData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
            />
            <Select
              label="Country"
              options={countries}
              value={formData?.country}
              onChange={(value) => handleInputChange('country', value)}
              error={errors?.country}
              required
              searchable
            />
          </div>
        </div>

        {/* Dedication Section */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Dedication (Optional)</h4>
          
          <Select
            label="Dedication Type"
            options={[
              { value: 'none', label: 'No dedication' },
              { value: 'honor', label: 'In honor of someone' },
              { value: 'memory', label: 'In memory of someone' },
              { value: 'notify', label: 'In honor with notification' }
            ]}
            value={formData?.dedicationType}
            onChange={(value) => handleInputChange('dedicationType', value)}
          />

          {formData?.dedicationType !== 'none' && (
            <div className="space-y-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
              <Input
                label="Dedication Name"
                type="text"
                value={formData?.dedicationName}
                onChange={(e) => handleInputChange('dedicationName', e?.target?.value)}
                error={errors?.dedicationName}
                placeholder="Person's name"
                required
              />
              
              {formData?.dedicationType === 'notify' && (
                <Input
                  label="Notification Email"
                  type="email"
                  value={formData?.dedicationEmail}
                  onChange={(e) => handleInputChange('dedicationEmail', e?.target?.value)}
                  error={errors?.dedicationEmail}
                  placeholder="Email to notify about this donation"
                  required
                />
              )}
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Personal Message (Optional)
                </label>
                <textarea
                  value={formData?.dedicationMessage}
                  onChange={(e) => handleInputChange('dedicationMessage', e?.target?.value)}
                  placeholder="Add a personal message..."
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-gray-900 resize-none shadow-sm"
                />
              </div>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Payment Method</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods?.map((method) => (
              <button
                key={method?.value}
                type="button"
                onClick={() => handleInputChange('paymentMethod', method?.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 ${
                  formData?.paymentMethod === method?.value
                    ? 'border-primary bg-gradient-primary text-white shadow-lg' 
                    : 'border-gray-200 hover:border-primary/50 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Icon name={method?.icon} size={24} />
                  <span className="text-sm font-semibold">{method?.label}</span>
                </div>
              </button>
            ))}
          </div>

                    {/* Bank Transfer Details */}
          {formData?.paymentMethod === 'bank' && (
            <div className="space-y-6 p-6 bg-gradient-to-r from-success/5 to-primary/5 rounded-xl border border-success/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Building2" size={24} className="text-success" />
                <h5 className="text-lg font-semibold text-gray-900">Bank Transfer Details</h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bankAccounts.map((account, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h6 className="font-semibold text-gray-900">{account.type}</h6>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(`${account.bank}\nAccount: ${account.accountNumber}\nSwift: ${account.swiftCode}`)}
                        className="text-primary hover:text-primary/80 text-sm font-medium"
                      >
                        Copy Details
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-medium">{account.bank}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account:</span>
                        <span className="font-mono font-medium">{account.accountNumber}</span>
                      </div>
                      {account.currency === 'USD' && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Swift Code:</span>
                          <span className="font-mono font-medium">{account.swiftCode}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Currency:</span>
                        <span className="font-medium">{account.currency}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Please include your name as reference when making the transfer. 
                  You'll receive a confirmation email once the transfer is processed.
                </p>
              </div>
            </div>
          )}

          {/* Credit Card Details */}
          {formData?.paymentMethod === 'card' && (
            <div className="space-y-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="CreditCard" size={24} className="text-primary" />
                <h5 className="text-lg font-semibold text-gray-900">Credit Card Information</h5>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                    maxLength="19"
                    onChange={(e) => {
                      // Format card number with spaces
                      const value = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
                      e.target.value = value;
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                    maxLength="5"
                    onChange={(e) => {
                      // Format expiry date
                      const value = e.target.value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
                      e.target.value = value;
                    }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                    maxLength="4"
                    onChange={(e) => {
                      // Only allow numbers
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                  />
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-green-600" />
                  <p className="text-green-800 text-sm">
                    <strong>Secure Payment:</strong> Your payment information is encrypted and secure. 
                    We use industry-standard SSL encryption to protect your data.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Privacy Options */}
        <div className="space-y-4">
          <Checkbox
            label="Make this donation anonymous"
            description="Your name will not appear on our donor recognition wall"
            checked={formData?.isAnonymous}
            onChange={(e) => handleInputChange('isAnonymous', e?.target?.checked)}
          />
          
          <Checkbox
            label="Subscribe to our newsletter"
            description="Receive quarterly impact updates and stories from the field"
            checked={formData?.subscribeNewsletter}
            onChange={(e) => handleInputChange('subscribeNewsletter', e?.target?.checked)}
          />
          
          <Checkbox
            label="I agree to the terms and conditions"
            description="By donating, you agree to our privacy policy and terms of service"
            checked={formData?.agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e?.target?.checked)}
            error={errors?.agreeToTerms}
            required
          />
        </div>

        {/* Security Badges */}
        <div className="flex items-center justify-center space-x-8 py-6 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Shield" size={18} className="text-success" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Lock" size={18} className="text-success" />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="CheckCircle" size={18} className="text-success" />
            <span>PCI Compliant</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isProcessing}
          disabled={isProcessing}
          className="btn-modern"
          iconName="Heart"
          iconPosition="left"
        >
          {isProcessing 
            ? 'Processing Donation...' 
            : `Donate ${formData?.currency} ${formData?.amount} ${donationType === 'monthly' ? '/month' : ''}`
          }
        </Button>
      </form>
    </div>
  );
};

export default DonationForm;