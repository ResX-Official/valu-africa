import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransparencySection = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const financialData = {
    '2024': {
      totalRevenue: 1000,
      programExpenses: 800,
      adminExpenses: 875000,
      fundraisingExpenses: 1000000,
      efficiency: 85,
      sources: [
        { name: 'Individual Donations', amount: 167 },
        { name: 'Foundation Grants', amount: 167 },
        { name: 'Government Partnerships', amount: 166 },
        { name: 'Corporate Sponsorships', amount: 166 },
        { name: 'Investment Income', amount: 167 },
        { name: 'Support from Other NGOs', amount: 167 }
      ],
      programs: [
        { name: 'Education & Skills Development', amount: 200 },
        { name: 'Healthcare & Nutrition', amount: 200 },
        { name: 'Economic Empowerment', amount: 200 },
        { name: 'Cultural Preservation', amount: 200 }
      ]
    },
    '2023': {
      totalRevenue: 10800000,
      programExpenses: 9180000,
      adminExpenses: 756000,
      fundraisingExpenses: 864000,
      efficiency: 85,
      sources: [
        { name: 'Individual Donations', amount: 3888000 },
        { name: 'Foundation Grants', amount: 3240000 },
        { name: 'Government Partnerships', amount: 2160000 },
        { name: 'Corporate Sponsorships', amount: 1080000 },
        { name: 'Investment Income', amount: 432000 },
        { name: 'Support from Other NGOs', amount: 0 }
      ],
      programs: [
        { name: 'Education & Skills Development', amount: 3672000 },
        { name: 'Healthcare & Nutrition', amount: 2754000 },
        { name: 'Economic Empowerment', amount: 1836000 },
        { name: 'Cultural Preservation', amount: 918000 }
      ]
    }
  };

  const certifications = [
    {
      name: 'GuideStar Platinum Seal',
      description: 'Highest level of transparency and accountability',
      year: '2024',
      icon: 'Award'
    },
    {
      name: 'Charity Navigator 4-Star',
      description: 'Exceptional financial health and accountability',
      year: '2024',
      icon: 'Star'
    },
    {
      name: 'Continental Impact',
      description: 'Committed to sustainable development principles',
      year: '2023',
      icon: 'Globe'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality management system certification',
      year: '2023',
      icon: 'CheckCircle'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const currentData = financialData?.[activeYear];

  const getPercentage = (amount) => {
    if (!currentData?.totalRevenue) return 0;
    return Math.round((amount / currentData.totalRevenue) * 100);
  };

  const getProgramPercentage = (amount) => {
    const total = currentData?.programExpenses || currentData?.programs?.reduce((sum, p) => sum + (p?.amount || 0), 0);
    if (!total) return 0;
    return Math.round((amount / total) * 100);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Financial <span className="text-gradient-gold">Transparency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in complete transparency about how your donations are used. 
            Every dollar is accounted for and directed toward maximum impact.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-background p-1 rounded-lg shadow-warm">
            {Object.keys(financialData)?.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeYear === year
                    ? 'bg-primary text-white shadow-warm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Financial Overview */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-background p-6 rounded-xl shadow-warm border border-warm text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="DollarSign" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-2">
              {formatCurrency(currentData?.totalRevenue)}
            </div>
            <div className="text-sm text-muted-foreground">Total Revenue</div>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-warm border border-warm text-center">
            <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-2">
              {formatCurrency(currentData?.programExpenses)}
            </div>
            <div className="text-sm text-muted-foreground">Program Expenses</div>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-warm border border-warm text-center">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="PieChart" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-2">
              {currentData?.efficiency}%
            </div>
            <div className="text-sm text-muted-foreground">Program Efficiency</div>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-warm border border-warm text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-2">
              5,000
            </div>
            <div className="text-sm text-muted-foreground">Lives Impacted</div>
          </div>
        </div>

        {/* Revenue Sources & Program Allocation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Revenue Sources */}
          <div className="bg-background p-8 rounded-xl shadow-warm border border-warm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Revenue Sources</h3>
            <div className="space-y-4">
              {currentData?.sources?.map((source, index) => {
                const pct = getPercentage(source?.amount);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{source?.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {formatCurrency(source?.amount)} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Program Allocation */}
          <div className="bg-background p-8 rounded-xl shadow-warm border border-warm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Program Allocation</h3>
            <div className="space-y-4">
              {currentData?.programs?.map((program, index) => {
                const pct = getProgramPercentage(program?.amount);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{program?.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {formatCurrency(program?.amount)} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Certifications & Recognition</h3>
            <p className="text-muted-foreground">
              Third-party validations of our commitment to transparency and effectiveness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl shadow-warm border border-warm text-center hover:shadow-warm-lg transition-all duration-300 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-warning rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={28} className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert?.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{cert?.description}</p>
                <span className="text-xs text-primary font-medium">{cert?.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Reports */}
        <div className="mt-16 bg-primary/10 p-8 rounded-xl border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Access Detailed Financial Reports
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Download our comprehensive annual reports, audited financial statements, 
            and impact assessments for complete transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary/90"
              iconName="Download"
              iconPosition="left"
            >
              Annual Report {activeYear}
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              iconName="FileText"
              iconPosition="left"
            >
              Financial Statements
            </Button>
            <Button 
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
              iconName="BarChart"
              iconPosition="left"
            >
              Impact Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;