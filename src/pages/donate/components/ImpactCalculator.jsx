import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactCalculator = ({ onAmountSelect }) => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const impactLevels = [
    {
      amount: 25,
      title: "Education Support",
      description: "Provides school supplies for one child for a month",
      icon: "BookOpen",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      amount: 50,
      title: "Healthcare Access",
      description: "Covers basic medical care for a family of four",
      icon: "Heart",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      amount: 100,
      title: "Clean Water Access",
      description: "Supports a family\'s clean water access for a year",
      icon: "Droplets",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      amount: 250,
      title: "Skills Training",
      description: "Funds vocational training for one adult",
      icon: "GraduationCap",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      amount: 500,
      title: "Micro-loan Program",
      description: "Funds a micro-loan for a women\'s cooperative",
      icon: "Users",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      amount: 1000,
      title: "Community Project",
      description: "Supports infrastructure development in rural areas",
      icon: "Building",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
    onAmountSelect(amount);
  };

  const handleCustomAmount = (value) => {
    const numValue = parseFloat(value) || 0;
    setCustomAmount(value);
    setIsCustom(true);
    setSelectedAmount(numValue);
    onAmountSelect(numValue);
  };

  const getCurrentImpact = () => {
    const amount = isCustom ? parseFloat(customAmount) || 0 : selectedAmount;
    
    if (amount >= 1000) return impactLevels?.[5];
    if (amount >= 500) return impactLevels?.[4];
    if (amount >= 250) return impactLevels?.[3];
    if (amount >= 100) return impactLevels?.[2];
    if (amount >= 50) return impactLevels?.[1];
    return impactLevels?.[0];
  };

  const currentImpact = getCurrentImpact();

  return (
    <div className="bg-card rounded-xl p-6 shadow-warm border border-warm">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
          See Your Impact
        </h3>
        <p className="text-muted-foreground">
          Choose an amount to see how your donation creates real change
        </p>
      </div>
      {/* Amount Selection */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {[25, 50, 100, 250, 500, 1000]?.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountSelect(amount)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 ${
              selectedAmount === amount && !isCustom
                ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-foreground hover:bg-muted'
            }`}
          >
            <div className="text-lg font-semibold">${amount}</div>
          </button>
        ))}
      </div>
      {/* Custom Amount */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Or enter custom amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            $
          </span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e?.target?.value)}
            placeholder="Enter amount"
            className="w-full pl-8 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input text-foreground"
          />
        </div>
      </div>
      {/* Impact Display */}
      <div className={`${currentImpact?.bgColor} rounded-lg p-4 border border-border`}>
        <div className="flex items-start space-x-4">
          <div className={`${currentImpact?.color} ${currentImpact?.bgColor} p-3 rounded-lg`}>
            <Icon name={currentImpact?.icon} size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">
              {currentImpact?.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {currentImpact?.description}
            </p>
            <div className="mt-2 text-lg font-bold text-primary">
              ${isCustom ? (parseFloat(customAmount) || 0)?.toFixed(2) : selectedAmount}
            </div>
          </div>
        </div>
      </div>
      {/* Multiple Impact Display for Higher Amounts */}
      {(isCustom ? parseFloat(customAmount) || 0 : selectedAmount) > 100 && (
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <h5 className="font-medium text-foreground mb-2">Your donation also includes:</h5>
          <div className="space-y-1 text-sm text-muted-foreground">
            {impactLevels?.filter(level => level?.amount <= (isCustom ? parseFloat(customAmount) || 0 : selectedAmount))?.slice(0, 3)?.map((level, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="Check" size={14} className="text-success" />
                  <span>{level?.description}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactCalculator;