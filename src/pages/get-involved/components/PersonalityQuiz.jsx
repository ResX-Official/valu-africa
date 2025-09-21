import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PersonalityQuiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'time_commitment',
  question: "How much time can you dedicate to supporting Valu Africa?",
      options: [
        { value: 'minimal', label: '1-2 hours per month', points: { advocate: 3, donor: 2, volunteer: 1 } },
        { value: 'moderate', label: '5-10 hours per month', points: { advocate: 2, donor: 1, volunteer: 3 } },
        { value: 'significant', label: '20+ hours per month', points: { advocate: 1, donor: 1, volunteer: 4 } }
      ]
    },
    {
      id: 'skills',
      question: "Which skills best describe your strengths?",
      options: [
        { value: 'communication', label: 'Writing & Communication', points: { advocate: 4, donor: 1, volunteer: 2 } },
        { value: 'technical', label: 'Technical & Digital', points: { advocate: 2, donor: 1, volunteer: 4 } },
        { value: 'financial', label: 'Financial & Business', points: { advocate: 1, donor: 4, volunteer: 2 } }
      ]
    },
    {
      id: 'preference',
      question: "How do you prefer to make an impact?",
      options: [
        { value: 'online', label: 'Online advocacy & awareness', points: { advocate: 4, donor: 2, volunteer: 1 } },
        { value: 'financial', label: 'Financial contributions', points: { advocate: 1, donor: 4, volunteer: 1 } },
        { value: 'hands_on', label: 'Hands-on involvement', points: { advocate: 2, donor: 1, volunteer: 4 } }
      ]
    }
  ];

  const handleAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    
    if (currentQuestion < questions?.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const scores = { advocate: 0, donor: 0, volunteer: 0 };
    
    Object.values(answers)?.forEach(answer => {
      Object.entries(answer?.points)?.forEach(([type, points]) => {
        scores[type] += points;
      });
    });

    const maxScore = Math.max(...Object.values(scores));
    const result = Object.keys(scores)?.find(key => scores?.[key] === maxScore);
    
    setShowResult(true);
    setTimeout(() => onComplete(result), 2000);
  };

  const getResultInfo = () => {
    const scores = { advocate: 0, donor: 0, volunteer: 0 };
    
    Object.values(answers)?.forEach(answer => {
      Object.entries(answer?.points)?.forEach(([type, points]) => {
        scores[type] += points;
      });
    });

    const maxScore = Math.max(...Object.values(scores));
    const result = Object.keys(scores)?.find(key => scores?.[key] === maxScore);

    const resultMap = {
      advocate: {
        title: 'Digital Advocate',
        description: 'You\'re perfect for spreading awareness and building our online community!',
        icon: 'Megaphone',
        color: 'text-accent'
      },
      donor: {
        title: 'Impact Supporter',
        description: 'Your financial contributions will directly transform lives across Africa!',
        icon: 'Heart',
        color: 'text-success'
      },
      volunteer: {
        title: 'Hands-On Volunteer',
        description: 'You\'re ready to roll up your sleeves and make a direct difference!',
        icon: 'Users',
        color: 'text-primary'
      }
    };

    return resultMap?.[result];
  };

  if (showResult) {
    const result = getResultInfo();
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-warning rounded-full flex items-center justify-center">
          <Icon name={result?.icon} size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gradient-gold">
          You're a {result?.title}!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          {result?.description}
        </p>
        <div className="animate-pulse">
          <Icon name="Loader2" size={24} className="animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground mt-2">
            Personalizing your experience...
          </p>
        </div>
      </div>
    );
  }

  const question = questions?.[currentQuestion];
  const progress = ((currentQuestion + 1) / questions?.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {questions?.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-warning h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      {/* Question */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-6 text-foreground">
          {question?.question}
        </h3>
        
        <div className="space-y-4">
          {question?.options?.map((option, index) => (
            <Button
              key={option?.value}
              variant="outline"
              fullWidth
              className="p-6 text-left justify-start hover:border-primary hover:bg-primary/5 transition-all duration-200"
              onClick={() => handleAnswer(question?.id, option)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-sm font-medium">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="text-base">{option?.label}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
      {/* Navigation */}
      {currentQuestion > 0 && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            iconName="ChevronLeft"
            iconPosition="left"
          >
            Previous Question
          </Button>
        </div>
      )}
    </div>
  );
};

export default PersonalityQuiz;