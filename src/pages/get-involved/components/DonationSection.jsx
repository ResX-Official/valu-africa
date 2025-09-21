import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [donationType, setDonationType] = useState('one-time');

  const currencies = [
    { value: 'USD', label: 'USD ($)' },
    { value: 'EUR', label: 'EUR (€)' },
    { value: 'GBP', label: 'GBP (£)' },
    { value: 'ZAR', label: 'ZAR (R)' },
    { value: 'NGN', label: 'NGN (₦)' },
    { value: 'KES', label: 'KES (KSh)' }
  ];

  const presetAmounts = {
    USD: [25, 50, 100, 250],
    EUR: [20, 45, 90, 225],
    GBP: [20, 40, 80, 200],
    ZAR: [400, 800, 1600, 4000],
    NGN: [10000, 20000, 40000, 100000],
    KES: [2500, 5000, 10000, 25000]
  };

  const impactCalculations = {
    USD: {
      25: "Provides clean water for 5 families for a month",
      50: "Feeds 10 children nutritious meals for a week",
      100: "Sponsors a child\'s education for 2 months",
      250: "Supports a small business startup loan"
    },
    EUR: {
      20: "Provides clean water for 4 families for a month",
      45: "Feeds 9 children nutritious meals for a week",
      90: "Sponsors a child\'s education for 2 months",
      225: "Supports a small business startup loan"
    },
    GBP: {
      20: "Provides clean water for 4 families for a month",
      40: "Feeds 8 children nutritious meals for a week",
      80: "Sponsors a child\'s education for 2 months",
      200: "Supports a small business startup loan"
    },
    ZAR: {
      400: "Provides clean water for 5 families for a month",
      800: "Feeds 10 children nutritious meals for a week",
      1600: "Sponsors a child\'s education for 2 months",
      4000: "Supports a small business startup loan"
    },
    NGN: {
      10000: "Provides clean water for 5 families for a month",
      20000: "Feeds 10 children nutritious meals for a week",
      40000: "Sponsors a child\'s education for 2 months",
      100000: "Supports a small business startup loan"
    },
    KES: {
      2500: "Provides clean water for 5 families for a month",
      5000: "Feeds 10 children nutritious meals for a week",
      10000: "Sponsors a child\'s education for 2 months",
      25000: "Supports a small business startup loan"
    }
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  const getImpactText = () => {
    const amount = getCurrentAmount();
    const impacts = impactCalculations?.[currency];
    
    // Find the closest preset amount for impact calculation
    const presets = presetAmounts?.[currency];
    const closestPreset = presets?.reduce((prev, curr) => 
      Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
    );
    
    return impacts?.[closestPreset] || "Makes a meaningful difference in African communities";
  };

  const getCurrencySymbol = () => {
    const symbols = {
      USD: '$', EUR: '€', GBP: '£', ZAR: 'R', NGN: '₦', KES: 'KSh'
    };
    return symbols?.[currency] || '$';
  };

  const monthlyBenefits = [
    "Quarterly impact reports with photos and stories",
    "Virtual meet-and-greets with beneficiaries",
    "Exclusive cultural celebration invitations",
    "Priority access to volunteer opportunities",
    "Monthly newsletter with insider updates"
  ];

  return (
    <div className="card-glass rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          Make Your Impact Today
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every contribution directly transforms lives across Africa. Choose your impact level and see exactly how your support creates lasting change.
        </p>
      </div>
      {/* Donation Type Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted rounded-lg p-1 flex">
          <button
            onClick={() => setDonationType('one-time')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              donationType === 'one-time' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            One-time
          </button>
          <button
            onClick={() => setDonationType('monthly')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
              donationType === 'monthly' ?'bg-primary text-primary-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Amount Selection */}
        <div>
          <div className="mb-6">
            <Select
              label="Currency"
              options={currencies}
              value={currency}
              onChange={setCurrency}
              className="mb-4"
            />
          </div>

          {/* Preset Amounts */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {presetAmounts?.[currency]?.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg border-2 transition-all text-center ${
                  selectedAmount === amount && !customAmount
                    ? 'border-primary bg-primary/5 text-primary' :'border-muted hover:border-primary/50'
                }`}
              >
                <div className="font-semibold">
                  {getCurrencySymbol()}{amount?.toLocaleString()}
                </div>
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <Input
            label="Custom Amount"
            type="number"
            placeholder={`Enter amount in ${currency}`}
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e?.target?.value);
              setSelectedAmount(0);
            }}
            className="mb-6"
          />

          {/* Impact Calculator */}
          <div className="bg-accent/10 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Icon name="Heart" size={20} className="text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-accent mb-1">Your Impact</h4>
                <p className="text-sm text-foreground">
                  {getCurrencySymbol()}{getCurrentAmount()?.toLocaleString()} {getImpactText()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Benefits */}
        <div>
          {donationType === 'monthly' && (
            <div className="bg-gradient-to-br from-primary/10 to-warning/10 rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4 flex items-center">
                <Icon name="Gift" size={20} className="mr-2 text-primary" />
                Monthly Supporter Benefits
              </h4>
              <ul className="space-y-2">
                {monthlyBenefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Security & Trust */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-3 flex items-center">
              <Icon name="Shield" size={20} className="mr-2 text-success" />
              Secure & Transparent
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-success" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>Charity Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="FileText" size={16} className="text-success" />
                <span>Tax Deductible</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="BarChart" size={16} className="text-success" />
                <span>Impact Tracking</span>
              </div>
            </div>
          </div>

          {/* Donate Button */}
          <Button
            variant="default"
            fullWidth
            className="bg-gradient-primary hover:bg-gradient-accent text-white py-4 text-lg font-semibold hover-lift"
            iconName="Heart"
            iconPosition="left"
          >
            Donate {getCurrencySymbol()}{getCurrentAmount()?.toLocaleString()} {donationType === 'monthly' ? '/month' : 'now'}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-3">
            You'll be redirected to our secure payment processor
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;