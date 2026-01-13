import { useState, useEffect } from 'react';
import { X, Copy, MessageCircle, Check } from 'lucide-react';
import { Product } from '../utils/marketplaceData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export function WhatsAppModal({ isOpen, onClose, product }: WhatsAppModalProps) {
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const whatsappNumber = '+237 6 53 67 95 05';
  const templateMessage = `Hi! I'm interested in purchasing the ${product.name} from your EmpowerED Marketplace. Could you please provide more details about availability and delivery? Thank you!`;

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(whatsappNumber);
      setCopiedNumber(true);
      setTimeout(() => setCopiedNumber(false), 2000);
    } catch (err) {
      console.error('Failed to copy number:', err);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(templateMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2000);
    } catch (err) {
      console.error('Failed to copy message:', err);
    }
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\s/g, '')}?text=${encodeURIComponent(templateMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-scrollable absolute inset-0 modal-backdrop">
      {/* Backdrop */}
      <div 
        className="absolute"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="modal-content">
        {/* Modal */}
        <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact via WhatsApp</h2>
          <p className="text-gray-600">Get in touch to purchase {product.name}</p>
        </div>

        {/* WhatsApp Number */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp Number:
          </label>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 font-medium hover:bg-green-100 transition-colors text-left"
            >
              {whatsappNumber}
            </button>
            <button
              onClick={handleCopyNumber}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              title="Copy number"
            >
              {copiedNumber ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Template Message */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Template Message:
          </label>
          <div className="relative">
            <textarea
              value={templateMessage}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 resize-none"
              rows={4}
            />
            <button
              onClick={handleCopyMessage}
              className="absolute top-2 right-2 p-2 hover:bg-gray-200 rounded-lg transition-colors"
              title="Copy message"
            >
              {copiedMessage ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-blue-900 mb-2">How to proceed:</h3>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. Click the WhatsApp number above to open WhatsApp</li>
            <li>2. Or copy the number and message manually</li>
            <li>3. Paste the template message in the chat</li>
            <li>4. Send your inquiry and wait for a response</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}