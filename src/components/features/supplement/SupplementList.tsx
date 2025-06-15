import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { 
  CalendarIcon,
  CheckmarkCircleIcon as CheckCircleIcon,
  PiIcon as PillIcon,
  ClockIcon,
  Delete01Icon as DeleteIcon,
  StickyNote01Icon as NoteIcon
} from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';

interface Supplement {
  id: string;
  name: string;
  time: string;
  taken: boolean;
  category: string;
  addedDate: Date;
  notes?: string;
  effects?: string[];
  sideEffects?: string[];
}

interface SupplementListProps {
  supplements: Supplement[];
  onToggleTaken: (id: string) => void;
  onDelete: (id: string) => void;
}

const SupplementList: React.FC<SupplementListProps> = ({
  supplements,
  onToggleTaken,
  onDelete
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="h-full flex flex-col">
      {/* 진행률 표시 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/90 text-sm font-medium">
            {t.pages.mySupplements.progress.todayProgress}
          </span>
          <span className="text-white/70 text-sm">
            {supplements.filter(s => s.taken).length}/{supplements.length}
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${supplements.length > 0 ? (supplements.filter(s => s.taken).length / supplements.length) * 100 : 0}%` 
            }}
          />
        </div>
      </div>
      
      {/* 스크롤 가능한 영양제 목록 영역 */}
      <div className="flex-1 overflow-hidden">
        {supplements.length === 0 ? (
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
              <HugeiconsIcon icon={PillIcon} className="w-8 h-8 text-white/30" />
            </div>
            <p className="text-white/60 text-sm font-medium mb-2">{t.pages.mySupplements.addSupplement}</p>
            <p className="text-white/40 text-xs">{t.pages.mySupplements.noInteractionsMessage}</p>
          </div>
        ) : (
          <div className="h-full overflow-y-auto space-y-3 pr-2">
            {supplements.map((supplement) => (
              <div
                key={supplement.id}
                className={`p-5 bg-gradient-to-r rounded-2xl border transition-all duration-300 ${
                  supplement.taken 
                    ? 'from-green-500/10 to-emerald-500/10 border-green-400/20' 
                    : 'from-white/5 to-white/5 border-white/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <button
                      onClick={() => onToggleTaken(supplement.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        supplement.taken 
                          ? 'bg-green-500 border-green-500 scale-110' 
                          : 'border-white/30'
                      }`}
                    >
                      {supplement.taken && (
                        <HugeiconsIcon icon={CheckCircleIcon} className="w-4 h-4 text-white" />
                      )}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`font-semibold text-sm transition-all duration-300 ${
                          supplement.taken ? 'text-white/80 line-through' : 'text-white'
                        }`}>
                          {supplement.name}
                        </h3>
                        {supplement.taken && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full font-medium">
                            {t.pages.mySupplements.progress.taken}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                        <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <HugeiconsIcon icon={ClockIcon} className="w-3 h-3 text-blue-400" />
                        </div>
                        <span>{
                          supplement.time === '아침' ? t.pages.mySupplements.general.morning :
                          supplement.time === '점심' ? t.pages.mySupplements.general.afternoon :
                          supplement.time === '저녁' ? t.pages.mySupplements.general.evening :
                          supplement.time === 'morning' ? t.pages.mySupplements.general.morning :
                          supplement.time === 'afternoon' ? t.pages.mySupplements.general.afternoon :
                          supplement.time === 'evening' ? t.pages.mySupplements.general.evening :
                          supplement.time
                        }</span>
                      </div>
                      
                      {supplement.notes && (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 mt-3">
                          <div className="flex items-center gap-2 mb-2">
                            <HugeiconsIcon icon={NoteIcon} className="w-3 h-3 text-white/60" />
                            <span className="text-xs text-white/60 font-medium">{t.pages.mySupplements.general.memo}</span>
                          </div>
                          <p className="text-xs text-white/80 leading-relaxed">{supplement.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => onToggleTaken(supplement.id)}
                      className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-300 ${
                        supplement.taken
                          ? 'bg-white/10 text-white/80'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      }`}
                    >
                      {supplement.taken ? t.pages.common.cancel : t.pages.mySupplements.progress.notTaken}
                    </button>
                    <button
                      onClick={() => onDelete(supplement.id)}
                      className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 transition-colors duration-300 flex items-center justify-center"
                    >
                      <HugeiconsIcon icon={DeleteIcon} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplementList; 