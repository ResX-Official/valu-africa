import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactDashboard = () => {
  const [counters, setCounters] = useState({
    livesImpacted: 0,
    fundsRaised: 0,
    activePrograms: 0,
    countriesServed: 0
  });

  const targetValues = {
    livesImpacted: 2000,
    fundsRaised: 2400,
    activePrograms: 10,
    countriesServed: 7
  };

  const impactStats = [
    {
      id: 1,
      icon: 'Users',
      label: 'Lives Impacted',
      value: counters?.livesImpacted,
      target: targetValues?.livesImpacted,
      suffix: '+',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      description: 'Individuals directly benefited from our programs'
    },
    {
      id: 2,
      icon: 'DollarSign',
      label: 'Funds Raised',
      value: counters?.fundsRaised,
      target: targetValues?.fundsRaised,
      prefix: '$',
      suffix: '+',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      description: 'Total funding mobilized for African development'
    },
    {
      id: 3,
      icon: 'Target',
      label: 'Active Programs',
      value: counters?.activePrograms,
      target: targetValues?.activePrograms,
      suffix: '',
      color: 'text-success',
      bgColor: 'bg-success/10',
      description: 'Ongoing initiatives across the continent'
    },
    {
      id: 4,
      icon: 'Globe',
      label: 'Countries Served',
      value: counters?.countriesServed,
      target: targetValues?.countriesServed,
      suffix: '',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      description: 'African nations with active programs'
    }
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues)?.map(key => {
      const increment = targetValues?.[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep < steps) {
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(increment * (currentStep + 1))
          }));
          currentStep++;
        }
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000)?.toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000)?.toFixed(0) + 'K';
    }
    return num?.toLocaleString();
  };

  return (
    <section className="py-16 section-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Real-Time Impact Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the tangible difference your support makes across Africa. These numbers update in real-time as our programs create lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats?.map((stat) => (
            <div
              key={stat?.id}
              className="card-glass rounded-xl p-6 hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stat?.label}
                </h3>
                
                <div className="flex items-baseline space-x-1">
                  {stat?.prefix && (
                    <span className="text-lg font-semibold text-foreground">
                      {stat?.prefix}
                    </span>
                  )}
                  <span className={`text-3xl font-bold ${stat?.color}`}>
                    {formatNumber(stat?.value)}
                  </span>
                  {stat?.suffix && (
                    <span className="text-lg font-semibold text-foreground">
                      {stat?.suffix}
                    </span>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat?.description}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="mt-4">
                <div className="w-full bg-muted rounded-full h-1">
                  <div
                    className={`h-1 rounded-full transition-all duration-1000 ${stat?.color?.replace('text-', 'bg-')}`}
                    style={{
                      width: `${Math.min((stat?.value / stat?.target) * 100, 100)}%`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Update Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span>Live updates • Last updated: {new Date()?.toLocaleTimeString()}</span>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;