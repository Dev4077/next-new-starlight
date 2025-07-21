'use client';

import { useThemeConfig } from '@/components/active-theme';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from './ui/input';
import { useMemo, useState } from 'react';

const DEFAULT_THEMES = [
  {
    name: 'ALL',
    value: 'default'
  },
  {
    name: 'E001',
    value: '1'
  },
  {
    name: 'E002',
    value: '2'
  },
  {
    name: 'E003',
    value: '3'
  },
  {
    name: 'E004',
    value: '4'
  },
  {
    name: 'E005',
    value: '5'
  }
];

export function ThemeSearchSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the themes list based on search input
  const filteredThemes = useMemo(() => {
    return DEFAULT_THEMES.filter((theme) =>
      theme.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className='flex items-center gap-2'>
      <Label htmlFor='theme-selector' className='sr-only'>
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id='theme-selector'
          className='justify-start *:data-[slot=select-value]:w-12'
        >
          <span className='text-muted-foreground hidden sm:block'>
            Select a Company:
          </span>
          <span className='text-muted-foreground block sm:hidden'>Theme</span>
          <SelectValue placeholder='Select a theme' />
        </SelectTrigger>
        <SelectContent align='end'>
          <div className='w-full'>
            <Input
              type='text'
              placeholder='Search...'
              className='w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <SelectGroup>
            {filteredThemes.length > 0 ? (
              filteredThemes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  {theme.name}
                </SelectItem>
              ))
            ) : (
              <div className='text-muted-foreground px-3 py-2 text-sm'>
                No themes found.
              </div>
            )}
          </SelectGroup>
          {/* <SelectSeparator /> */}
        </SelectContent>
      </Select>
    </div>
  );
}
