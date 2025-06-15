import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { useLanguage } from '@/lib/LanguageContext';

interface NewSupplement {
  name: string;
  time: string;
  notes: string;
}

interface SupplementFormProps {
  newSupplement: NewSupplement;
  setNewSupplement: (supplement: NewSupplement) => void;
  onAdd: () => void;
}

const SupplementForm: React.FC<SupplementFormProps> = ({
  newSupplement,
  setNewSupplement,
  onAdd
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-6">
        <div>
          <label className="block text-white/90 text-sm font-medium mb-3">
            {t.pages.mySupplements.addSupplementForm.supplementName}
          </label>
          <input
            type="text"
            value={newSupplement.name}
            onChange={(e) => setNewSupplement({ ...newSupplement, name: e.target.value })}
            placeholder={t.pages.mySupplements.addSupplementForm.namePlaceholder}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-white/90 text-sm font-medium mb-3">
            {t.pages.mySupplements.addSupplementForm.takingTime}
          </label>
          <input
            type="text"
            value={newSupplement.time}
            onChange={(e) => setNewSupplement({ ...newSupplement, time: e.target.value })}
            placeholder={t.pages.mySupplements.addSupplementForm.timePlaceholder}
            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300"
          />
        </div>

        <div>
          <label className="block text-white/90 text-sm font-medium mb-3">
            {t.pages.mySupplements.addSupplementForm.notes}
          </label>
          <textarea
            value={newSupplement.notes}
            onChange={(e) => setNewSupplement({ ...newSupplement, notes: e.target.value })}
            placeholder={t.pages.mySupplements.addSupplementForm.notesPlaceholder}
            className="w-full h-20 px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm placeholder-white/40 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300 resize-none"
          />
        </div>
      </div>
      
      <div className="mt-8">
        <button
          onClick={onAdd}
          disabled={!newSupplement.name || !newSupplement.time}
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-sm rounded-2xl hover:from-blue-600 hover:to-blue-700 disabled:from-white/10 disabled:to-white/10 disabled:text-white/40 disabled:cursor-not-allowed transition-all duration-300 shadow-lg disabled:shadow-none"
        >
          <div className="flex items-center justify-center gap-2">
            <HugeiconsIcon icon={PlusSignIcon} className="w-4 h-4" />
            {t.pages.mySupplements.addSupplementForm.addButton}
          </div>
        </button>
      </div>
    </div>
  );
};

export default SupplementForm; 